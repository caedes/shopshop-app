import { Link, Outlet } from "react-router";
import { ColorModeToggle } from "../atoms/ColorModeToggle";

export const MainTemplate = () => {
  return (
    <>
      <h1>Welcome to ShopShop!</h1>
      <p>Your one-stop shop for all your shopping needs.</p>
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
