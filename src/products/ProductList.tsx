import { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";
import type { Product } from "./types";

const productFromApi: Product[] = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
];

export const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(productFromApi);
  }, []);

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
