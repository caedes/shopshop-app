import { Link } from "react-router";
import { ProductList } from "../../products/ProductList";
import { Fab, TextField, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useProducts } from "../../products/useProducts";
import { useShoppingCart } from "../../shopping-cart/useShoppingCart";

export const ProductsPage = () => {
  const { products, isLoading, search, setSearch } = useProducts();
  const addToCart = useShoppingCart((state) => state.addToCart);

  return (
    <>
      <Typography>Choose your product.</Typography>
      <TextField
        name="search"
        sx={{ m: 2 }}
        value={search}
        onChange={setSearch}
      />
      <ProductList
        isLoading={isLoading}
        products={products}
        addToCart={addToCart}
      />
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
