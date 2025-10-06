import { Button, Stack, Step, StepLabel, Stepper } from "@mui/material";
import { useStepperNavigation } from "../../hooks/useStepperNavigation";
import { useShoppingCartPersonalInfosForm } from "../../shopping-cart/useShoppingCartPersonalInfosForm";
import { ControlledTextField } from "../molecules/ControlledTextField";
import { useShoppingCartShippingDetailsForm } from "../../shopping-cart/useShoppingCartShippingDetailsForm";
import { useShoppingCartPaymentDetailsForm } from "../../shopping-cart/useShoppingCartPaymentDetailsForm";

export const CheckoutPage = () => {
  const { step, navigateToNextStep } = useStepperNavigation({
    path: "/checkout",
  });
  const { personalInfosControl, savePersonalInfos } =
    useShoppingCartPersonalInfosForm({
      navigateToNextStep,
    });

  const { shippingDetailsControl, saveShippingDetails } =
    useShoppingCartShippingDetailsForm({
      navigateToNextStep,
    });

  const { paymentDetailsControl, savePaymentDetails } =
    useShoppingCartPaymentDetailsForm({
      navigateToNextStep,
    });

  return (
    <>
      <Stepper activeStep={step - 1}>
        <Step>
          <StepLabel>Personal Infos</StepLabel>
        </Step>
        <Step>
          <StepLabel>Shipping Details</StepLabel>
        </Step>
        <Step>
          <StepLabel>Payment Details</StepLabel>
        </Step>
        <Step>
          <StepLabel>Thanks</StepLabel>
        </Step>
      </Stepper>

      {step === 1 && (
        <form onSubmit={savePersonalInfos}>
          <Stack spacing={2} sx={{ mt: 4, width: 300 }}>
            <ControlledTextField
              control={personalInfosControl}
              label="First Name"
              name="firstName"
            />
            <ControlledTextField
              control={personalInfosControl}
              label="Last Name"
              name="lastName"
            />
            <Button type="submit" variant="contained">
              Next Step
            </Button>
          </Stack>
        </form>
      )}

      {step === 2 && (
        <form onSubmit={saveShippingDetails}>
          <Stack spacing={2} sx={{ mt: 4, width: 300 }}>
            <ControlledTextField
              control={shippingDetailsControl}
              label="Address"
              name="address"
            />
            <ControlledTextField
              control={shippingDetailsControl}
              label="Country"
              name="country"
            />
            <Button type="submit" variant="contained">
              Next Step
            </Button>
          </Stack>
        </form>
      )}

      {step === 3 && (
        <form onSubmit={savePaymentDetails}>
          <Stack spacing={2} sx={{ mt: 4, width: 300 }}>
            <ControlledTextField
              control={paymentDetailsControl}
              label="Credit Card Number"
              name="creditCardNumber"
            />
            <ControlledTextField
              control={paymentDetailsControl}
              label="CCV"
              name="ccv"
            />
            <Button type="submit" variant="contained">
              Next Step
            </Button>
          </Stack>
        </form>
      )}
    </>
  );
};
