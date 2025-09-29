import { Link } from "react-router";
import { Price } from "../ds/atoms/Price";
import { Typography } from "@mui/material";

type ProductCardProps = {
  id: number;
  title: string;
  price: number;
};

export const ProductCard = ({ id, title, price }: ProductCardProps) => {
  return (
    <>
      <Typography variant="h4">
        <Link to={`/products/${id}`}>{title}</Link>
      </Typography>
      <Price amount={price} />
    </>
  );
};
