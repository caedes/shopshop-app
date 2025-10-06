import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

const PersonalInfosSchema = z.object({
  firstName: z.string().min(3, "First name is required"),
  lastName: z.string().min(3, "Last name is required"),
});

const ShippingDetailsSchema = z.object({
  address: z.string().min(3, "Address is required"),
  country: z.string().min(3, "Country is required"),
});

const PaymentDetailsSchema = z.object({
  creditCardNumber: z.string().min(16, "Credit card number is required"),
  ccv: z.string().min(3, "CCV is required"),
});

const shoppingCartCheckoutFormSchemas = [
  PersonalInfosSchema,
  ShippingDetailsSchema,
  PaymentDetailsSchema,
];

export const useShoppingCartCheckoutForm = (step: number) => {
  type CurrentStepForm = z.infer<
    (typeof shoppingCartCheckoutFormSchemas)[number]
  >;

  const form = useForm<CurrentStepForm>({
    resolver: zodResolver(shoppingCartCheckoutFormSchemas[step - 1]),
  });

  const checkoutShoppingCartStep = (currentStepForm: CurrentStepForm) => {
    console.log("Checkout step:", currentStepForm);
  };

  return { form, checkoutShoppingCartStep };
};
