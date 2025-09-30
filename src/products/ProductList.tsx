import { Typography } from "@mui/material";
import { ProductCard } from "./ProductCard";
import { useProducts } from "./useProducts";

export const ProductList = () => {
  const { products, isLoading } = useProducts();

  if (isLoading) return <p>Loading...</p>;

  return products ? (
    <ol>
      {products.map(({ id, name, price, description, categories }) => (
        <li key={id}>
          <ProductCard
            title={name}
            price={price}
            id={id}
            description={description}
            categories={categories}
          />
        </li>
      ))}
    </ol>
  ) : (
    <Typography>No products found</Typography>
  );
};
