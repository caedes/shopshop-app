import { Box, Grid, Typography } from "@mui/material";
import { ProductCard } from "./ProductCard";
import { useProducts } from "./useProducts";

export const ProductList = () => {
  const { products, isLoading } = useProducts();

  if (isLoading) return <p>Loading...</p>;

  return products ? (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {products.map(({ id, name, price, description, categories }) => (
          <Grid size={{ xs: 12, md: 4, lg: 3 }} key={id}>
            <ProductCard
              title={name}
              price={price}
              id={id}
              description={description}
              categories={categories}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  ) : (
    <Typography>No products found</Typography>
  );
};
