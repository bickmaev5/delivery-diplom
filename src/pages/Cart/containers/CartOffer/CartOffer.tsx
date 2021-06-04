import { Backdrop, Box, Button, Fade, Grid, makeStyles, Modal, Paper, TextField, Typography } from "@material-ui/core";
import { Field, FieldProps, Form, Formik } from "formik";
import { CartItems_Insert_Input } from "generated-frontend";
import { gql } from "graphql-request";
import { useUser } from "hooks/useUser";
import React, { memo, useState, VFC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { fetcher } from "services/client";
import { ApplicationState } from "store";
import { addCart } from "store/cart/actions";
import * as Yup from 'yup';


const schema = Yup.object({
  phone: Yup.string().required('Номер телефона обязателен к заполнению!'),
}).defined();

type FormValues = Yup.InferType<typeof schema>;


const useStyles = makeStyles(() => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
}), { name: 'CartOffer'});

const setPhone = gql`
  mutation setUserPhone($phone: String!, $id: String!) {
    update_users_by_pk(pk_columns: { id: $id}, _set: { phone: $phone }) {
      phone
    }
  }
`

const createCart = gql`
  mutation createCart($userId: String!) {
    insert_shoppingCart_one(object: { userId: $userId }) {
      id
    }
  }
`;

const insertCartItems = gql`
  mutation insertCartItems($items: [cartItems_insert_input!]!) {
    insert_cartItems(objects: $items) {
      affected_rows
    }
  }
`;

const CartOfferComponent: VFC = () => {
  const user = useUser();
  console.log(user);
  const cartItems = useSelector((state: ApplicationState) => state.cart.items);
  const dispatch = useDispatch();
  const classes = useStyles();
  const [isOpen, toggleOpen] = useState(false);
  const [cartId, setCartId] = useState('');
  const history = useHistory();
  
  const handleClose = () => {
    toggleOpen(false);
    dispatch(addCart.clearCart())
    history.push('/');
  }
  const handleOpen = () => toggleOpen(true);

  const onSubmit = async (values: FormValues) => {
    if (!user?.phone) {
      await fetcher(setPhone, { id: user?.id, phone: values.phone })
    }
    const createCartVariables = { userId: user?.id };
    const res: { insert_shoppingCart_one: { id: string }} = await fetcher(createCart, createCartVariables);
    const cartId = res.insert_shoppingCart_one.id;
    const items: Partial<CartItems_Insert_Input>[] = cartItems.map((item) => ({
      productId: item.id,
      quantity: item.count,
      cartId
    }));
    setCartId(cartId);
    await fetcher(insertCartItems, { items });
    handleOpen();
  }

  const initialValues = {
    phone: user?.phone || '',
  }

  return (
    <>
      <Box mt={5}>
        <Formik<FormValues> onSubmit={onSubmit} initialValues={initialValues} validationSchema={schema} enableReinitialize>
          {({ errors }) => (
            <Form>
              <Grid container direction="column" spacing={4}>
                <Grid item>
                  <Typography variant="body2">
                    Нам необходим ваш номер телефона для того, что бы курьер или сборщик смог с вами связаться
                  </Typography>
                  <br/>
                  <Field name="phone">
                    {({ field, meta }: FieldProps) => (
                      <TextField
                        name={field.name}
                        disabled={Boolean(user?.phone)}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                        value={field.value}
                        error={meta.touched && Boolean(errors.phone)}
                        helperText={errors.phone}
                      />
                    )}
                  </Field>
                </Grid>
                <Grid item md={3}>
                  <Button variant="contained" color="secondary" type="submit" fullWidth>Заказать</Button> 
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </Box>
      <Modal
        className={classes.modal}
        open={isOpen}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isOpen}>
          <div>
            <Paper elevation={1}>
              <Box padding={4}>
                <Grid container direction="column" alignItems="center" spacing={3}>
                  <Typography variant="h5" gutterBottom>
                    {`Заказ № ${cartId} оформлен!`}
                  </Typography>
                  <Typography variant="body1">
                    Наш менеджер скоро с вами свяжется
                  </Typography>
                  <Grid item md={4}>
                    <Button variant="contained" color="secondary" onClick={handleClose}>Ок</Button>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </div>
        </Fade>
      </Modal>
    </>
  )
}

export const CartOffer = memo(CartOfferComponent);