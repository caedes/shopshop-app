import { getProducts } from "../apiClient";
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
    queryFn: getProducts,
  });

  return { products, isLoading };
};
