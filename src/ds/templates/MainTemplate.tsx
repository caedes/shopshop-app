import { Link, Outlet } from "react-router";

export const MainTemplate = () => {
  return (
    <div>
      <h1>Welcome to ShopShop!</h1>
      <p>Your one-stop shop for all your shopping needs.</p>
      <nav>
        <Link to="/">Home</Link> | <Link to="/products">Products</Link>
      </nav>
      <Outlet />
    </div>
  );
};
