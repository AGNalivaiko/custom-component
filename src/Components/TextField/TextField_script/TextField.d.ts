import "../importsStylesForTextField";
type TextFieldProp = {
  variant?: "filled" | "standard" | "outlined";
  size?: "small" | "medium" | "standard";
  label?: string;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  error?: boolean;
  helperText?: string;
};
declare function TextField({
  variant,
  size,
  label,
  required,
  disabled,
  readOnly,
  error,
  helperText,
}: TextFieldProp): React.ReactElement;
export default TextField;
//# sourceMappingURL=TextField.d.ts.map
