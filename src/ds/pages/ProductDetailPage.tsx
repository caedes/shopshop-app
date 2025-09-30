import { useParams } from "react-router";
import { Price } from "../atoms/Price";
import { useProduct } from "../../products/useProduct";
import { useShoppingCart } from "../../shopping-cart/useShoppingCart";
import { Button, Typography } from "@mui/material";
import { createShoppingCartItem } from "../../products/createShoppingCartItem";

export const ProductDetailPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const { product, isLoading } = useProduct(productId);
  const addToCart = useShoppingCart((state) => state.addToCart);

  if (isLoading) return <p>Loading...</p>;

  if (!product) return <Typography>Product not found</Typography>;

  const { name, price } = product;

  const shoppingCartItem = createShoppingCartItem({
    id: productId!,
    productName: name,
    price,
  });

  return (
    <article>
      <Typography variant="h4">{name}</Typography>
      <Price amount={price} />
      <div>
        <Button variant="contained" onClick={() => addToCart(shoppingCartItem)}>
          Add to ShopShoppingCart
        </Button>
      </div>
    </article>
  );
};
