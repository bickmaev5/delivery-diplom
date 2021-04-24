import './App.css';
import { Container, Grid } from '@material-ui/core';
import { ConnectedRouter } from 'connected-react-router';
import { Header } from 'components/Header';
import { Catalog } from 'containers/Catalog';
import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';
import { client } from 'services/client';
import { createBrowserHistory, History } from 'history';
import { configureStore } from 'configureStore';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';

const history: History = createBrowserHistory();
// @ts-ignore
const initialState = window.INITIAL_REDUX_STATE;

const store = configureStore(history, initialState);

function App() {
  const { getAccessTokenSilently, isAuthenticated, isLoading } = useAuth0();
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


  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          <Header />
          <Container>
            <Grid container>
              <Switch>
                <Route path="/">
                    <Catalog/>
                </Route>
              </Switch>
            </Grid>
          </Container>
        </div>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
