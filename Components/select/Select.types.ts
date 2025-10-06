type Option = {
  label: string;
  value: string;
};

type SelectVariants = "outlined" | "filled" | "standard";

export type SelectProps = {
  variant?: SelectVariants;
  label?: string;
  options?: Option[];
  disabled?: boolean;
  required?: boolean;
  error?: boolean;
  helperText?: string;
};
