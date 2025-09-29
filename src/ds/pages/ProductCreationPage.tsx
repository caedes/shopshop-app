import { Button, Typography } from "@mui/material";
import { useProductCreationForm } from "../../products/useProductCreationForm";

export const ProductCreationPage = () => {
  const { form, createProduct } = useProductCreationForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  return (
    <>
      <Typography variant="h4">Product Creation Form</Typography>
      <form>
        <div>
          <input {...register("name")} placeholder="Product Name" />
          {errors.name && <span className="error">{errors.name.message}</span>}
        </div>
        <div>
          <input
            {...register("price", { valueAsNumber: true })}
            placeholder="Product Price"
          />
          {errors.price && (
            <span className="error">{errors.price.message}</span>
          )}
        </div>
        <Button
          variant="contained"
          type="submit"
          onClick={handleSubmit(createProduct)}
        >
          Create Product
        </Button>
      </form>
    </>
  );
};
