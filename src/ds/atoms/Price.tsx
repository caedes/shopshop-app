import { Typography } from "@mui/material";

type PriceProps = {
  amount: number;
};

export const Price = ({ amount }: PriceProps) => {
  return <Typography component="span">{amount}</Typography>;
};
