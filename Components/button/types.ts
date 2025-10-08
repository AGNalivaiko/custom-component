import { ComponentPropsWithRef } from "react";

type ButtonVariant = "text" | "contained" | "outlined";

type ButtonSizes = "small" | "medium" | "large";

type ButtonColors = "primary" | "success" | "error" | "secondary";

export type ButtonsProp = ComponentPropsWithRef<"button"> & {
  variant?: ButtonVariant;
  size?: ButtonSizes;
  color?: ButtonColors;
  loading?: boolean;
};
