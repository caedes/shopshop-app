import { useEffect, useState } from "react";
import type { Product } from "./types";

const productFromApi: Product[] = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
];

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setProducts(productFromApi);
      setIsLoading(false);
    }, 1000);
  }, []);

  return { products, isLoading };
};
