import { Price } from "../ds/atoms/Price";

type ProductCardProps = {
  title: string;
  price: number;
};

export const ProductCard = ({ title, price }: ProductCardProps) => {
  return (
    <div>
      <h4>{title}</h4>
      <Price amount={price} />
    </div>
  );
};
