import { connectRouter, RouterState } from "connected-react-router";
import { History } from "history";
import { combineReducers } from "redux";
import { cartReducer } from "./cart/reducer";
import { CartState } from "./cart/types";

export interface ApplicationState {
  router: RouterState;
  cart: CartState;
}

const createReducer = (history: History) => combineReducers<ApplicationState>({
  router: connectRouter(history),
  cart: cartReducer,
});

export default createReducer