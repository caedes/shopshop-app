import { ProductCard } from "./ProductCard";
import { useProducts } from "./useProducts";

export const ProductList = () => {
  const { products, isLoading } = useProducts();

  if (isLoading) return <p>Loading...</p>;

  return (
    <ol>
      {products.map(({ id, name, price }) => (
        <li key={id}>
          <ProductCard title={name} price={price} />
        </li>
      ))}
    </ol>
  );
};
