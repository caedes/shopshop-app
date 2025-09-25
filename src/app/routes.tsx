import { createBrowserRouter } from "react-router";
import { HomePage } from "../ds/pages/HomePage";
import { ProductsPage } from "../ds/pages/ProductsPage";
import { MainTemplate } from "../ds/templates/MainTemplate";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainTemplate />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "products",
        element: <ProductsPage />,
      },
    ],
  },
]);
