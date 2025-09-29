import { useParams } from "react-router";
import { Price } from "../atoms/Price";
import { useProduct } from "../../products/useProduct";
import { useShoppingCart } from "../../shopping-cart/useShoppingCart";
import type { ShoppingCartItem } from "../../shopping-cart/types";

export const ProductDetailPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const { product, isLoading } = useProduct(productId);
  const addToCart = useShoppingCart((state) => state.addToCart);

  if (isLoading) return <p>Loading...</p>;

  if (!product) return <p>Product not found</p>;

  const { name, price } = product;

  const shoppingCartItem: ShoppingCartItem = {
    id: productId!,
    productName: name,
    price,
    quantity: 1,
  };

  return (
    <article>
      <h4>{name}</h4>
      <Price amount={price} />
      <div>
        <button onClick={() => addToCart(shoppingCartItem)}>
          Add to ShopShoppingCart
        </button>
      </div>
    </article>
  );
};
