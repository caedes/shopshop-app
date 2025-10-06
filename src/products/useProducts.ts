import { useState } from "react";
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
  const [search, updateSearch] = useState("");

  const { data: products, isLoading } = useQuery<Product[]>({
    queryKey: ["products", { search }],
    queryFn: getProducts(search),
  });

  const setSearch = ({ target }: React.ChangeEvent<HTMLInputElement>) =>
    updateSearch(target.value);

  return { products, isLoading, search, setSearch };
};
