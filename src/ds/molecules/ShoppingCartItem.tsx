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
      <h5>{productName}</h5>
      <p>Quantity: {quantity}</p>
    </>
  );
};
