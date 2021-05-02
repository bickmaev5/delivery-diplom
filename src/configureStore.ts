import { Store, createStore, applyMiddleware } from 'redux';
// `react-router-redux` is deprecated, so we use `connected-react-router`.
// This provides a Redux middleware which connects to our `react-router` instance.
import { routerMiddleware } from 'connected-react-router';
// We'll be using Redux Devtools. We can use the `composeWithDevTools()`
// directive so we can pass our middleware along with it
// If you use react-router, don't forget to pass in your history type.
import { History } from 'history';

// Import the state interface and our combined reducers/sagas.
import middlewares, { sagaMiddleware } from 'store/middlewares';
import { rootSaga } from 'sagas';
import reducers from './store';
import { composeWithDevTools } from 'redux-devtools-extension';
//@ts-ignore
function configureStore(history: History, initialState: any): Store<any> {
  // create the composing function for our middlewares
  const composeEnhancer = composeWithDevTools({
    trace: true,
    traceLimit: 25,
    name: 'diplima',
  });

  // We'll create our store with the combined reducers/sagas, and the initial Redux state that
  // we'll be passing from our entry point.
  const store = createStore(
    reducers(history),
    initialState,
    composeEnhancer(middlewares, applyMiddleware(routerMiddleware(history)))
  );

  sagaMiddleware.run(rootSaga);

  return store;
}

export { configureStore };
