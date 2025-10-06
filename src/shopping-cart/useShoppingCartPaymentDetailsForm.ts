import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

const PaymentDetailsSchema = z.object({
  creditCardNumber: z.string().min(16, "Credit card number is required"),
  ccv: z.string().min(3, "CCV is required"),
});
type PaymentDetails = z.infer<typeof PaymentDetailsSchema>;

type useShoppingCartPaymentDetailsFormProps = {
  navigateToNextStep: () => void;
};

export const useShoppingCartPaymentDetailsForm = ({
  navigateToNextStep,
}: useShoppingCartPaymentDetailsFormProps) => {
  const form = useForm<PaymentDetails>({
    resolver: zodResolver(PaymentDetailsSchema),
  });

  const handlePaymentDetailsSubmit = (paymentDetails: PaymentDetails) => {
    console.log("PaymentDetails:", paymentDetails);
    navigateToNextStep();
  };

  const { control: paymentDetailsControl, handleSubmit } = form;

  const savePaymentDetails = handleSubmit(handlePaymentDetailsSubmit);

  return { paymentDetailsControl, savePaymentDetails };
};
