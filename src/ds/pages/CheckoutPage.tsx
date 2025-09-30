import {
  Button,
  Stack,
  Step,
  StepLabel,
  Stepper,
  TextField,
} from "@mui/material";
import { useStepperNavigation } from "../../hooks/useStepperNavigation";

export const CheckoutPage = () => {
  const { step, navigateToNextStep } = useStepperNavigation({
    path: "/checkout",
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
        <form
          onSubmit={(event) => {
            event.preventDefault();

            navigateToNextStep();
          }}
        >
          <Stack spacing={2} sx={{ mt: 4, width: 300 }}>
            <TextField label="First Name" name="firstName" />
            <TextField label="Last Name" name="lastName" />
            <Button type="submit" variant="contained">
              Next Step
            </Button>
          </Stack>
        </form>
      )}

      {step === 2 && (
        <form
          onSubmit={(event) => {
            event.preventDefault();

            navigateToNextStep();
          }}
        >
          <Stack spacing={2} sx={{ mt: 4, width: 300 }}>
            <TextField label="Address" name="address" />
            <TextField label="Country" name="country" />
            <Button type="submit" variant="contained">
              Next Step
            </Button>
          </Stack>
        </form>
      )}
    </>
  );
};
