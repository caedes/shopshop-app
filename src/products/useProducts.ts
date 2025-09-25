import type { Product } from "./types";
import { useQuery } from "@tanstack/react-query";

/**
 * Get all products
 *
 * @example
 * const { products, isLoading } = useProducts();
 */
export const useProducts = () => {
  const { data: products, isLoading } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: () =>
      fetch("http://localhost:3001/products", {
        signal: AbortSignal.timeout(3000),
      }).then((res) => res.json()),
  });

  return { products, isLoading };
};
