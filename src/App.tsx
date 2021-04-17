import './App.css';
import { Button, Container, Grid } from '@material-ui/core';
import { ProductCard } from 'components/ProductCard';
import { Header } from 'components/Header';
import { useAuth0 } from '@auth0/auth0-react';
import { gql } from 'graphql-request';
import { useEffect } from 'react';
import useSWR from 'swr';
import { client } from 'services/client';

const query = gql`
  query getProducts {
    products {
      name
    }
  }
`;

function App() {
  const { user, loginWithPopup, getAccessTokenSilently, isAuthenticated, logout } = useAuth0();
  const s = JSON.stringify(user);
  const { mutate } = useSWR(query);
  useEffect(() => {
    async function getToken() {
      if (isAuthenticated) {
        const res = await getAccessTokenSilently();
        if (res) {
          client.setHeader('Authorization', `Bearer ${res}`);
          mutate(query);
        }
      }
    }
    getToken();
  }, [isAuthenticated, getAccessTokenSilently, mutate]);


  return (
    <div>
      <Header />
      <Container>
        <Grid container>
          <Grid item>
            <ProductCard />
          </Grid>
          {s && 'autheed'}
          {!isAuthenticated && (
            <Button variant="contained" onClick={loginWithPopup}>Login</Button>
            )}
          {isAuthenticated && (
            <Button variant="contained" onClick={() => logout()}>logout</Button>
          )}
        </Grid>
      </Container>
    </div>
  );
}

export default App;
