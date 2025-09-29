import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./queryClient";
import { RouterProvider } from "react-router";
import { router } from "./routes";
import { ColorModeProvider } from "../color-mode/ColorModeProvider";

import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import { CssBaseline } from "@mui/material";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ColorModeProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <RouterProvider router={router} />
        </ThemeProvider>
      </ColorModeProvider>
    </QueryClientProvider>
  );
}
