import "./importsStyleForCheckboxes";
import { ReactElement, InputHTMLAttributes, ChangeEventHandler } from "react";

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

function CustomCheckbox({
  variant = "outlined",
  sizeCheckbox = "medium",
  color = "primary",
  label = "enter your label",
  disabled = false,
  required = false,
  error = false,
  checked,
  onChange,
  ...rest
}: CustomCheckboxProps): React.ReactElement {
  const variantClass = {
    text: "checkbox-text",
    contained: "checkbox-contained",
    outlined: "checkbox-outlined",
  }[variant];

  const sizeClass = {
    small: "checkbox-small",
    medium: "checkbox-medium",
    large: "checkbox-large",
  }[sizeCheckbox];

  const colorClass = {
    primary: "checkbox-primary",
    success: "checkbox-success",
    error: "checkbox-error",
  }[color];

  const stateClass = `
    ${disabled ? "checkbox-disabled" : ""}
    ${error ? "checkbox-error-state" : ""}
    ${required ? "checkbox-required" : ""}
    `;

  const className = `checkbox ${variantClass} ${sizeClass} ${colorClass} ${stateClass}`;

  return (
    <label className={className}>
      <input
        type="checkbox"
        disabled={disabled}
        checked={checked}
        onChange={onChange}
        required={required}
        {...rest}
      />
      {label && (
        <span className="checkbox-label">
          {label}
          {required && <span className="checkbox-required-mark"> *</span>}
        </span>
      )}
    </label>
  );
}

export default CustomCheckbox;
