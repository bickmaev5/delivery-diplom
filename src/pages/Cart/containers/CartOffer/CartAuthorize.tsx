import { useAuth0 } from "@auth0/auth0-react";
import { Backdrop, Box, Button, Fade, Grid, makeStyles, Modal, Paper, Typography } from "@material-ui/core";
import { memo, useState, VFC } from "react";

const useStyles = makeStyles(() => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
}), { name: 'CartAuthorize'});

export const CartAuthorizeComponent: VFC = () => {
  const classes = useStyles();
  const { loginWithRedirect } = useAuth0();
  const [isOpen, toggleOpen] = useState(false);

  const handleClose = () => toggleOpen(false);
  const handleOpen = () => toggleOpen(true);
  const login = () => {
    loginWithRedirect()
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleOpen}>Заказать</Button>
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
                  <Typography variant="h5">
                    Для оформления заказа авторизуйтесь!
                  </Typography>
                  <Grid item md={4}>
                    <Button variant="contained" color="secondary" onClick={login}>Войти</Button>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </div>
        </Fade>
      </Modal>
    </>
  )
};

export const CartAuthorize = memo(CartAuthorizeComponent);