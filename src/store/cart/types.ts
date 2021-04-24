export type CartItem = {
  id: number;
  count: number;
}

export interface CartState {
  items: CartItem[]
}