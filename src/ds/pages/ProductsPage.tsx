import { Link } from "react-router";
import { ProductList } from "../../products/ProductList";

export const ProductsPage = () => {
  return (
    <>
      <p>Choose your product.</p>
      <ProductList />
      <Link to="/products/create">Create New Product</Link>
    </>
  );
};
