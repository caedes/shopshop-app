import { QueryClientProvider } from "@tanstack/react-query";
import { ProductList } from "../products/ProductList";
import { queryClient } from "./queryClient";

export default function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <h1>ShopShop</h1>

        <ProductList />
      </QueryClientProvider>
    </>
  );
}
