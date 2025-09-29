import { Link } from "react-router";
import { ProductList } from "../../products/ProductList";
import { Button, Typography } from "@mui/material";

export const ProductsPage = () => {
  return (
    <>
      <Typography>Choose your product.</Typography>
      <ProductList />
      <Button component={Link} to="/products/create">
        Create New Product
      </Button>
    </>
  );
};
