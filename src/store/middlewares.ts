import { applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
// eslint-disable-next-line import/no-cycle

export const history = createBrowserHistory();
// const router: Middleware = routerMiddleware(history);
export const sagaMiddleware = createSagaMiddleware();

const middlewares = applyMiddleware(sagaMiddleware);

export default middlewares;
