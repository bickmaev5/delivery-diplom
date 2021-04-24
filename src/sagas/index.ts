import { all } from 'redux-saga/effects';
import { cartSagas } from 'store/cart/sagas';

export const rootSaga = function* root() {
  yield all([
    cartSagas(),
  ])
}