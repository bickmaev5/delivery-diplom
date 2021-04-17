import './App.css';
import { Container, Grid } from '@material-ui/core';
import { Header } from 'components/Header';
import { Catalog } from 'containers/Catalog';
import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';
import { client } from 'services/client';

function App() {
  const { getAccessTokenSilently, isAuthenticated } = useAuth0();
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
  }, [isAuthenticated, getAccessTokenSilently]);


  return (
    <div>
      <Header />
      <Container>
        <Grid container>
          <Catalog />
        </Grid>
      </Container>
    </div>
  );
}

export default App;
