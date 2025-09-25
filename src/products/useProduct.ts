import type { Product } from "./types";
import { useQuery } from "@tanstack/react-query";

export const useProduct = (productId?: string) => {
  const { data: product, isLoading } = useQuery<Product>({
    queryKey: ["products", productId],
    queryFn: () =>
      fetch(`http://localhost:3001/products/${productId}`, {
        signal: AbortSignal.timeout(3000),
      }).then((res) => res.json()),
    enabled: !!productId,
  });

  return { product, isLoading };
};
