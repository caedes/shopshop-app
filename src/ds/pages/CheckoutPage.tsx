import { Button, Stack, Step, StepLabel, Stepper } from "@mui/material";
import { useStepperNavigation } from "../../hooks/useStepperNavigation";
import { ControlledTextField } from "../molecules/ControlledTextField";
import { useShoppingCartCheckoutForm } from "../../shopping-cart/useShoppingCartCheckoutForm";

export const CheckoutPage = () => {
  const { step, navigateToNextStep } = useStepperNavigation({
    path: "/checkout",
  });

  const { form, checkoutShoppingCartStep } = useShoppingCartCheckoutForm(step);
  const { control } = form;

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

      <form>
        {step === 1 && (
          <Stack spacing={2} sx={{ mt: 4, width: 300 }}>
            <ControlledTextField
              control={control}
              label="First Name"
              name="firstName"
            />
            <ControlledTextField
              control={control}
              label="Last Name"
              name="lastName"
            />
            <Button
              variant="contained"
              onClick={() => {
                form.handleSubmit(checkoutShoppingCartStep(form.getValues()))();

                navigateToNextStep();
              }}
            >
              Next Step
            </Button>
          </Stack>
        )}

        {step === 2 && (
          <Stack spacing={2} sx={{ mt: 4, width: 300 }}>
            <ControlledTextField
              control={control}
              label="Address"
              name="address"
            />
            <ControlledTextField
              control={control}
              label="Country"
              name="country"
            />
            <Button variant="contained" onClick={navigateToNextStep}>
              Next Step
            </Button>
          </Stack>
        )}

        {step === 3 && (
          <Stack spacing={2} sx={{ mt: 4, width: 300 }}>
            <ControlledTextField
              control={control}
              label="Credit Card Number"
              name="creditCardNumber"
            />
            <ControlledTextField control={control} label="CCV" name="ccv" />
            <Button variant="contained" onClick={navigateToNextStep}>
              Purchase
            </Button>
          </Stack>
        )}
      </form>
    </>
  );
};
