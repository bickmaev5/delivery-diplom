import { all, call, put, takeLatest } from "@redux-saga/core/effects";
import { ActionType, getType } from "deox";
import * as ls from "local-storage";
import { find, findIndex } from "lodash";
import { addCart } from "./actions";
import { CartItem } from "./types";

export function* addToCart(action: ActionType<typeof addCart.next>) {
  const currentCart: CartItem[] = yield call(ls.get, 'cart');
  if (Array.isArray(currentCart)) {
    const ids = new Set(currentCart.map(item => item.id));
    if (ids.has(action.payload)) {
      const index = findIndex(currentCart, { id: action.payload });
      const item = find(currentCart, { id: action.payload });
      currentCart.splice(index, 1, {...item!, count: ++item!.count})
      yield call(ls.set, 'cart', currentCart);
      yield put(addCart.saveToState(currentCart));
    } else {
      yield call(ls.set, 'cart', [...(currentCart || []), { id: action.payload, count: 1 }])
      yield put(addCart.saveToState([...(currentCart || []), { id: action.payload, count: 1 }]));
    }
  } else {
    yield call(ls.set, 'cart', [...(currentCart || []), { id: action.payload, count: 1 }])
    yield put(addCart.saveToState([...(currentCart || []), { id: action.payload, count: 1 }]));
  }
}

export function* removeFromCart(action: ActionType<typeof addCart.remove>) {
  const currentCart: CartItem[] = yield call(ls.get, 'cart');
  if (Array.isArray(currentCart)) {
    const ids = new Set(currentCart.map(item => item.id));
    if (ids.has(action.payload)) {
      const index = findIndex(currentCart, { id: action.payload });
      const item = find(currentCart, { id: action.payload });
      if (item?.count === 1) {
        currentCart.splice(index, 1)
      } else {
        currentCart.splice(index, 1, {...item!, count: --item!.count})
      }
      yield call(ls.set, 'cart', currentCart);
    }
  }
  yield put(addCart.saveToState(currentCart));
}

export function* clearCartSaga() {
  yield call(ls.set, 'cart', []);
}

export function* cartSagas() {
  yield all([
    takeLatest(getType(addCart.next), addToCart),
    takeLatest(getType(addCart.remove), removeFromCart),
    takeLatest(getType(addCart.clearCart), clearCartSaga)
  ])
}