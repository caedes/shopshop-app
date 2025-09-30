import { Typography } from "@mui/material";

type PriceProps = {
  amount: number;
};

export const Price = ({ amount }: PriceProps) => {
  return (
    <Typography component="span">
      {new Intl.NumberFormat(navigator.language, {
        style: "currency",
        currency: "EUR",
      }).format(amount)}
    </Typography>
  );
};
