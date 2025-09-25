import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./queryClient";
import { RouterProvider } from "react-router";
import { router } from "./routes";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
