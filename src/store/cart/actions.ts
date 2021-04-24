import { createActionCreator } from "deox";
import { CartItem } from "./types";

const prefix = 'cart';

export const addCart = {
  next: createActionCreator(`${prefix}/ADD_CART_NEXT`, (resolve) => (id: number) => resolve(id)),
  remove: createActionCreator(`${prefix}/ADD_CART_REMOVE`, (resolve) => (id: number) => resolve(id)),
  saveToState: createActionCreator(`${prefix}/ADD_CART_SAVE`, (resolve) => (items: CartItem[]) => resolve(items))
}