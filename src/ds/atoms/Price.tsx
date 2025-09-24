type PriceProps = {
  amount: number;
};

export const Price = ({ amount }: PriceProps) => {
  return <span>{amount}</span>;
};
