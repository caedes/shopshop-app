import { useState } from "react";

export const useProductCreationForm = () => {
  const [formData, setFormData] = useState({ name: "", price: 0 });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Submitting form data:", formData);
  };

  return { formData, handleChange, handleSubmit };
};
