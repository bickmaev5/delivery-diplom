import { Box, Button, Grid, TextField, Typography } from "@material-ui/core";
import { Field, Form, Formik } from "formik";
import { CartItems_Insert_Input } from "generated-frontend";
import { gql } from "graphql-request";
import { useUser } from "hooks/useUser";
import { memo, VFC } from "react";
import { useSelector } from "react-redux";
import { fetcher } from "services/client";
import { ApplicationState } from "store";

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
  const cartItems = useSelector((state: ApplicationState) => state.cart.items);

  const onSubmit = async () => {
    const varables = { userId: user?.id }
    const res: { insert_shoppingCart_one: { id: string }} = await fetcher(createCart, varables);
    const cartId = res.insert_shoppingCart_one.id;
    const items: Partial<CartItems_Insert_Input>[] = cartItems.map((item) => ({
      productId: item.id,
      quantity: item.count,
      cartId
    }));
    const res2 = await fetcher(insertCartItems, { items });
    console.log(res2);
  }

  return (
    <Box mt={5}>
      <Formik onSubmit={onSubmit} initialValues={{}}>
        <Form>
          <Grid container direction="column" spacing={4}>
            <Grid item>
              <Typography variant="body2">
                Нам необходим ваш номер телефона для того, что бы курьер или сборщик смог с вами связаться
              </Typography>
              <br/>
              <Field component={TextField} name="phone" label="Номер телефона" disabled={user?.phone} />
            </Grid>
            <Grid item md={3}>
              <Button variant="contained" color="secondary" type="submit" fullWidth>Заказать</Button> 
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </Box>
  )
}

export const CartOffer = memo(CartOfferComponent);