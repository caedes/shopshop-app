import { Link } from "react-router";
import { ProductList } from "../../products/ProductList";
import { Fab, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export const ProductsPage = () => {
  return (
    <>
      <Typography>Choose your product.</Typography>
      <ProductList />
      <Fab
        color="primary"
        aria-label="Create new product"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
        component={Link}
        to="/products/create"
      >
        <AddIcon />
      </Fab>
    </>
  );
};
