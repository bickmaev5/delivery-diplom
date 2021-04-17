import { useAuth0 } from "@auth0/auth0-react";
import { Button, Container, Grid, Typography } from "@material-ui/core";
import { FC } from "react";
import { useStyles } from "./Header.styles";

export const Header: FC = () => {
  const { user, isAuthenticated, loginWithRedirect } = useAuth0();
  const classes = useStyles();
  return (
    <header className={classes.root}>
      <Container>
        <Grid container justify="space-between">
          <Grid item>
            <Grid container alignItems="center">
              <Grid item>
                  <Typography className={classes.username}>Delivery Diplom</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            {isAuthenticated ? (
              <Grid container alignItems="center">
                <Typography variant="body1" className={classes.username}>{user.name}</Typography>
                <img src={user.picture} alt="user-pic" className={classes.img} />
              </Grid>
            ) : (
              <Grid container alignItems="center">
                <Button onClick={loginWithRedirect} variant="contained" color="secondary">Войти</Button>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Container>
    </header>
  )
};