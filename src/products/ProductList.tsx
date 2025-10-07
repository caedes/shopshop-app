import { Box, Typography } from "@mui/material";
import { BasicCard } from "../ds/molecules/BasicCard";
import { BasicGrid } from "../ds/molecules/BasicGrid";
import { Price } from "../ds/atoms/Price";
import { createShoppingCartItem } from "./createShoppingCartItem";
import type { Product } from "./types";
import type { ShoppingCartItem } from "../shopping-cart/types";
import { getImageId } from "./image";

type ProductListProps = {
  isLoading: boolean;
  addToCart: (shoppingCartItem: ShoppingCartItem) => void;
  products?: Product[];
};

export const ProductList = ({
  isLoading,
  products,
  addToCart,
}: ProductListProps) => {
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
