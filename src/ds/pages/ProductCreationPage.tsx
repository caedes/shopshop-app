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
      <h4>Product Creation Form</h4>
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
        <button type="submit" onClick={handleSubmit(createProduct)}>
          Create Product
        </button>
      </form>
    </>
  );
};
