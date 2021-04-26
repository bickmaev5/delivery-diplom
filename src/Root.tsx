import App from "App";
import { configureStore } from "configureStore";
import { ConnectedRouter } from "connected-react-router";
import { History } from "history";
import { createBrowserHistory } from "history";
import { FC } from "react";
import { Provider } from "react-redux";

import { Auth0Provider } from '@auth0/auth0-react';
import { SWRConfig } from 'swr';
import { fetcher } from 'services/client';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;


const history: History = createBrowserHistory();
// @ts-ignore
const initialState = window.INITIAL_REDUX_STATE;

const store = configureStore(history, initialState);

const RootWrapper: FC = ({ children }) => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Auth0Provider
          domain={domain!}
          clientId={clientId!}
          redirectUri={window.location.origin}
          audience="https://dev-4oaejg61.eu.auth0.com/api/v2/"
        >
          <SWRConfig
            value={{
              fetcher,
            }}
          >
            {children}
          </SWRConfig>
        </Auth0Provider>
      </ConnectedRouter>
    </Provider>
  );
};

export const Root: FC = () => (
  <RootWrapper>
    <App />
  </RootWrapper>
);
