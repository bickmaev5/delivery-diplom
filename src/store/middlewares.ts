import { applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
// eslint-disable-next-line import/no-cycle

export const sagaMiddleware = createSagaMiddleware();

const middlewares = applyMiddleware(sagaMiddleware);

export default middlewares;
