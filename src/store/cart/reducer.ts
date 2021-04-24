import { createReducer } from "deox";
import { addCart } from "./actions";
import { CartState } from "./types";

const initialState: CartState = {
  items: [],
}

export const cartReducer = createReducer(initialState, (handle) => [
  handle(addCart.saveToState, (state, { payload }) => ({
    ...state,
    items: payload,
  }))
]);