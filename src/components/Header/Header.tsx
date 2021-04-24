import { useAuth0 } from "@auth0/auth0-react";
import { Badge, Button, Container, Grid, Paper, Typography } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { FC } from "react";
import { useSelector } from "react-redux";
import { ApplicationState } from "store";
import { useStyles } from "./Header.styles"

export const Header: FC = () => {
  const { user, isAuthenticated, loginWithRedirect } = useAuth0();
  const classes = useStyles();
  const count = useSelector((state: ApplicationState) => state.cart.items.length);

  return (
    <Paper elevation={1}>
      <header className={classes.root}>
        <Container>
          <Grid container justify="space-between">
            <Grid item>
              <Grid container alignItems="center">
                <Grid item>
                  <Typography className={classes.username}>
                    Delivery Diplom
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container alignItems="center">
                {isAuthenticated ? (
                  <>
                    <Typography variant="body1" className={classes.username}>
                      {user.name}
                    </Typography>
                    <img
                      src={user.picture}
                      alt="user-pic"
                      className={classes.img}
                    />
                  </>
                ) : (
                  <>
                    <Button
                      onClick={loginWithRedirect}
                      variant="contained"
                      color="secondary"
                    >
                      Войти
                    </Button>
                  </>
                )}
                <Grid item>
                  <Badge badgeContent={count} color="secondary">
                    <ShoppingCart color="secondary"/>
                  </Badge>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </header>
    </Paper>
  );
};
