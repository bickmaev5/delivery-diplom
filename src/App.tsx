import './App.css';
import { Button, Grid } from '@material-ui/core';
import { ProductCard } from 'components/ProductCard';
import { useAuth0 } from '@auth0/auth0-react';
import { request, GraphQLClient, gql } from 'graphql-request';
import { useEffect } from 'react';
import useSWR from 'swr';
import { client, fetcher } from 'services/client';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

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
  console.log(s);
  useEffect(() => {
    async function getToken() {
      if (isAuthenticated) {
        const res = await getAccessTokenSilently();
        console.log(res);
        if (res) {
          client.setHeader('Authorization', `Bearer ${res}`);
        }
      }
    }
    getToken();
  }, [isAuthenticated]);

  const data = useSWR(query, fetcher);

  return (
    <div>
      <Button variant="contained" color="primary">123123</Button>
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
    </div>
  );
}

export default App;
