import "../importsStyleForCheckboxes";
import { InputHTMLAttributes, ChangeEventHandler } from "react";
type CustomCheckboxProps = {
  variant?: "text" | "contained" | "outlined";
  sizeCheckbox?: "small" | "medium" | "large";
  color?: "primary" | "success" | "error";
  label?: string;
  disabled?: boolean;
  required?: boolean;
  error?: boolean;
  checked?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
} & InputHTMLAttributes<HTMLInputElement>;
declare function CustomCheckbox({
  variant,
  sizeCheckbox,
  color,
  label,
  disabled,
  required,
  error,
  checked,
  onChange,
  ...rest
}: CustomCheckboxProps): React.ReactElement;
export default CustomCheckbox;
//# sourceMappingURL=Checkboxes.d.ts.map
