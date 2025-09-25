import { useProductCreationForm } from "../../products/useProductCreationForm";

export const ProductCreationPage = () => {
  const { formData, handleChange, handleSubmit } = useProductCreationForm();

  return (
    <>
      <h4>Product Creation Form</h4>
      <form>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Product Name"
        />
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Product Price"
        />
        <button type="submit" onClick={handleSubmit}>
          Create Product
        </button>
      </form>
    </>
  );
};
