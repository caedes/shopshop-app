import { useShoppingCart } from "../../shopping-cart/useShoppingCart";
import { Price } from "../atoms/Price";
import { ShoppingCartItem } from "../molecules/ShoppingCartItem";

export const ShoppingCartPage = () => {
  const shoppingCartItems = useShoppingCart((state) => state.shoppingCartItems);
  const total = useShoppingCart((state) => state.total);

  return (
    <>
      <h4>Your Shopping Cart</h4>
      {shoppingCartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {shoppingCartItems.map(({ id, productName, quantity }) => (
            <li key={id}>
              <ShoppingCartItem productName={productName} quantity={quantity} />
            </li>
          ))}
        </ul>
      )}

      <p>
        Total : <Price amount={total} />
      </p>

      <button onClick={() => console.log("Purchased!")}>Purchase</button>
    </>
  );
};
