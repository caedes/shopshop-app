import { getProduct } from "../apiClient";
import type { Product } from "./types";
import { useQuery } from "@tanstack/react-query";

export const useProduct = (productId?: string) => {
  const { data: product, isLoading } = useQuery<Product>({
    queryKey: ["products", productId],
    queryFn: getProduct(productId),
    enabled: !!productId,
  });

  return { product, isLoading };
};
