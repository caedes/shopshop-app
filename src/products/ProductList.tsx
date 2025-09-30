import { Box, Typography } from "@mui/material";
import { BasicCard } from "../ds/molecules/BasicCard";
import { useProducts } from "./useProducts";
import { BasicGrid } from "../ds/molecules/BasicGrid";
import { Price } from "../ds/atoms/Price";
import { useShoppingCart } from "../shopping-cart/useShoppingCart";
import { createShoppingCartItem } from "./createShoppingCartItem";

/**
 * A simple function to get a different image for each product.
 * Picsum has images with ids from 0 to 1084, so we add 20 to the product id
 * to avoid having the same image as the product id.
 *
 * It should be avoid in production code, but it's fine for this demo app.
 */
const getImageId = (id: string) => {
  return Number(id) + 20;
};

export const ProductList = () => {
  const { products, isLoading } = useProducts();
  const addToCart = useShoppingCart((state) => state.addToCart);

  if (isLoading) return <p>Loading...</p>;

  if (!products || products.length === 0)
    return <Typography>No products found</Typography>;

  const gridItems = products.map(
    ({ id, name, price, description, categories }) => ({
      id,
      imageUrl: `https://picsum.photos/id/${getImageId(id)}/350/350`,
      name,
      price,
      description,
      categories,
    })
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <BasicGrid
        gridItems={gridItems}
        render={(item) => (
          <BasicCard
            {...item}
            actions={[
              {
                label: "Add to ShopShoppingCart",
                onClick: () =>
                  addToCart(
                    createShoppingCartItem({
                      ...item,
                      productName: item.name,
                    })
                  ),
              },
            ]}
          >
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {item.description}
            </Typography>
            <Price amount={item.price} />
          </BasicCard>
        )}
      />
    </Box>
  );
};
