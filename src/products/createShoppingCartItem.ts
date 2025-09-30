import type { ShoppingCartItem } from "../shopping-cart/types";

type createShoppingCartItemProps = {
  id: string;
  productName: string;
  price: number;
};

export const createShoppingCartItem = ({
  id,
  productName,
  price,
}: createShoppingCartItemProps) => {
  const shoppingCartItem: ShoppingCartItem = {
    id,
    productName,
    price,
    quantity: 1,
  };

  return shoppingCartItem;
};
