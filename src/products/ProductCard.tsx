import { Link } from "react-router";
import { Price } from "../ds/atoms/Price";

type ProductCardProps = {
  id: number;
  title: string;
  price: number;
};

export const ProductCard = ({ id, title, price }: ProductCardProps) => {
  return (
    <>
      <h4>
        <Link to={`/products/${id}`}>{title}</Link>
      </h4>
      <Price amount={price} />
    </>
  );
};
