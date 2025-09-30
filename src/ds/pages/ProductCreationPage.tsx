import { Button, Stack, Typography } from "@mui/material";
import { useProductCreationForm } from "../../products/useProductCreationForm";
import { ControlledTextField } from "../molecules/ControlledTextField";

export const ProductCreationPage = () => {
  const { form, createProduct } = useProductCreationForm();
  const { handleSubmit, control } = form;

  return (
    <>
      <Typography variant="h4">Product Creation Form</Typography>
      <form onSubmit={handleSubmit(createProduct)}>
        <Stack sx={{ width: 300 }}>
          <ControlledTextField
            name="name"
            control={control}
            label="Product Name"
          />
          <ControlledTextField
            name="price"
            control={control}
            label="Product Price"
            type="number"
          />
          <Button variant="contained" type="submit" sx={{ mt: 2 }}>
            Create Product
          </Button>
        </Stack>
      </form>
    </>
  );
};
