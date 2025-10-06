import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

const ShippingDetailsSchema = z.object({
  address: z.string().min(3, "Address is required"),
  country: z.string().min(3, "Country is required"),
});
type ShippingDetails = z.infer<typeof ShippingDetailsSchema>;

type useShoppingCartShippingDetailsFormProps = {
  navigateToNextStep: () => void;
};

export const useShoppingCartShippingDetailsForm = ({
  navigateToNextStep,
}: useShoppingCartShippingDetailsFormProps) => {
  const form = useForm<ShippingDetails>({
    resolver: zodResolver(ShippingDetailsSchema),
  });

  const handleShippingDetailsSubmit = (shippingDetails: ShippingDetails) => {
    console.log("shippingDetails:", shippingDetails);
    navigateToNextStep();
  };

  const { control: shippingDetailsControl, handleSubmit } = form;

  const saveShippingDetails = handleSubmit(handleShippingDetailsSubmit);

  return { shippingDetailsControl, saveShippingDetails };
};
