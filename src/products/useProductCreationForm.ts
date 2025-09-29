import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

const ProductFormSchema = z.object({
  name: z.string().min(3, "Product name is required"),
  price: z.number().gt(0, "Price must be a positive number"),
});

type ProductForm = z.infer<typeof ProductFormSchema>;

export const useProductCreationForm = () => {
  const form = useForm<ProductForm>({
    resolver: zodResolver(ProductFormSchema),
  });

  const createProduct = (productForm: ProductForm) => {
    console.log("Creating product:", productForm);
  };

  return { form, createProduct };
};
