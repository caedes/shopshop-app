import { useParams } from "react-router";
import { Price } from "../atoms/Price";
import { useProduct } from "../../products/useProduct";

export const ProductDetailPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const { product, isLoading } = useProduct(productId);

  if (isLoading) return <p>Loading...</p>;

  if (!product) return <p>Product not found</p>;

  const { name, price } = product;

  return (
    <article>
      <h4>{name}</h4>
      <Price amount={price} />
    </article>
  );
};
