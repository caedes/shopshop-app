import { QueryClient } from "@tanstack/react-query";
import { MINUTE_IN_MS } from "../constants";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * MINUTE_IN_MS,
    },
  },
});
