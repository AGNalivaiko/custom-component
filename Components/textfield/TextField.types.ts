import { ComponentPropsWithRef } from "react";

type TextFieldVariants = "filled" | "standard" | "outlined";
type TextFieldSizes = "small" | "medium" | "standard";

export type TextFieldProp = ComponentPropsWithRef<"input"> & {
  variant?: TextFieldVariants;
  sizeField?: TextFieldSizes;
  helperText?: string;
  error?: boolean;
  label?: string;
};
