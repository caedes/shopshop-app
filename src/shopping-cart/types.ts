export type ShoppingCartItem = {
  id: string;
  productName: string;
  quantity: number;
  price: number;
};

export type ShoppingCartState = {
  shoppingCartItems: ShoppingCartItem[];
  total: number;
  addToCart: (shoppingCartItem: ShoppingCartItem) => void;
};
