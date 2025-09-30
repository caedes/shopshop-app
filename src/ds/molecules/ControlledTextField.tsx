import { TextField } from "@mui/material";
import type { TextFieldProps } from "@mui/material";
import { Controller } from "react-hook-form";
import type { Control, FieldValues, Path } from "react-hook-form";

type ControlledTextFieldProps<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  type?: "text" | "number";
} & Omit<TextFieldProps, "name" | "type">;

export const ControlledTextField = <T extends FieldValues>({
  name,
  control,
  type = "text",
  ...textFieldProps
}: ControlledTextFieldProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, ...field }, fieldState: { error } }) => (
        <TextField
          {...textFieldProps}
          {...field}
          onChange={({ target }) =>
            onChange(type === "number" ? Number(target.value) : target.value)
          }
          error={!!error}
          helperText={error?.message}
        />
      )}
    />
  );
};
