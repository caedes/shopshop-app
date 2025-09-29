import { create } from "zustand";
import type { ShoppingCartItem, ShoppingCartState } from "./types";

const initialShoppingCartItems: ShoppingCartItem[] = [];
const initialTotal = 0;

export const useShoppingCart = create<ShoppingCartState>((set) => ({
  shoppingCartItems: initialShoppingCartItems,
  total: initialTotal,
  addToCart: (shoppingCartItem: ShoppingCartItem) =>
    set((state) => {
      const existingItemIndex = state.shoppingCartItems.findIndex(
        (item) => item.id === shoppingCartItem.id
      );

      if (existingItemIndex !== -1) {
        const newShoppingCartItems = [...state.shoppingCartItems];
        newShoppingCartItems[existingItemIndex].quantity +=
          shoppingCartItem.quantity;

        return {
          shoppingCartItems: newShoppingCartItems,
          total:
            state.total + shoppingCartItem.price * shoppingCartItem.quantity,
        };
      }

      return {
        shoppingCartItems: [...state.shoppingCartItems, shoppingCartItem],
        total: state.total + shoppingCartItem.price * shoppingCartItem.quantity,
      };
    }),
  purchase: () =>
    set(() => ({
      shoppingCartItems: initialShoppingCartItems,
      total: initialTotal,
    })),
}));
