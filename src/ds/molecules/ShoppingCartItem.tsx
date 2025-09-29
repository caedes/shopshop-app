import { Typography } from "@mui/material";

type ShoppingCartItemProps = {
  productName: string;
  quantity: number;
};

export const ShoppingCartItem = ({
  productName,
  quantity,
}: ShoppingCartItemProps) => {
  return (
    <>
      <Typography variant="h5">{productName}</Typography>
      <Typography>Quantity: {quantity}</Typography>
    </>
  );
};
