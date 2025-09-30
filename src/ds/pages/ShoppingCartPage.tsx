import { Button, Typography } from "@mui/material";
import { useShoppingCart } from "../../shopping-cart/useShoppingCart";
import { Price } from "../atoms/Price";
import { ShoppingCartItem } from "../molecules/ShoppingCartItem";
import { BasicGrid } from "../molecules/BasicGrid";

export const ShoppingCartPage = () => {
  const shoppingCartItems = useShoppingCart((state) => state.shoppingCartItems);
  const total = useShoppingCart((state) => state.total);
  const purchase = useShoppingCart((state) => state.purchase);

  const handlePurchase = () => {
    purchase();
    console.log("Purchased!");
  };

  return (
    <>
      <Typography variant="h4">Your Shopping Cart</Typography>
      {shoppingCartItems.length === 0 ? (
        <Typography>Your cart is empty.</Typography>
      ) : (
        <BasicGrid
          gridItems={shoppingCartItems}
          render={(item) => <ShoppingCartItem {...item} />}
        />
      )}

      <p>
        Total : <Price amount={total} />
      </p>

      <Button variant="contained" onClick={handlePurchase}>
        Purchase
      </Button>
    </>
  );
};
