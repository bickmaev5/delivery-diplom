import { Container, Grid } from '@material-ui/core';
import { Header } from 'components/Header';
import { Catalog } from 'containers/Catalog';
import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';
import { client } from 'services/client';
import { Route, Switch } from 'react-router';
import * as ls from 'local-storage';
import Cart from 'pages/Cart';
import { useDispatch } from 'react-redux';
import { CartItem } from 'store/cart/types';
import { addCart } from 'store/cart/actions';

function App() {
  const { getAccessTokenSilently, isAuthenticated, isLoading } = useAuth0();
  const dispatch = useDispatch();
  useEffect(() => {
    async function getToken() {
      if (isAuthenticated) {
        const res = await getAccessTokenSilently();
        if (res) {
          client.setHeader('Authorization', `Bearer ${res}`);
        }
      }
    }
    getToken();
  }, [isAuthenticated, getAccessTokenSilently, isLoading]);
  useEffect(() => {
    const items = ls.get<CartItem[]>('cart') || []
    dispatch(addCart.saveToState(items));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Grid container>
          <Switch>
            <Route path="/" exact component={Catalog} />
          </Switch>
          <Switch>
            <Route path="/cart" component={Cart} />
          </Switch>
        </Grid>
      </Container>
    </>
  );
}

export default App;
