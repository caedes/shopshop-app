import { Link, Outlet } from "react-router";
import { ColorModeToggle } from "../atoms/ColorModeToggle";
import { Typography } from "@mui/material";

export const MainTemplate = () => {
  return (
    <>
      <Typography variant="h1">Welcome to ShopShop!</Typography>
      <Typography>Your one-stop shop for all your shopping needs.</Typography>
      <header>
        <nav>
          <Link to="/">Home</Link> | <Link to="/products">Products</Link> |{" "}
          <Link to="/shopping-cart">ShopShopping Cart</Link>
        </nav>
        <ColorModeToggle />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
