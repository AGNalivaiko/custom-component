import styles from "./checkbox.module.css";
import { InputHTMLAttributes, ChangeEventHandler, RefObject } from "react";

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
  ref?: RefObject<HTMLInputElement>;
} & InputHTMLAttributes<HTMLInputElement>;

export function CustomCheckbox({
  variant = "outlined",
  sizeCheckbox = "medium",
  color = "primary",
  label = "enter your label",
  disabled = false,
  required = false,
  error = false,
  checked,
  onChange,
  ref,
  ...rest
}: CustomCheckboxProps): React.ReactElement {
  const variantClass = {
    text: styles["checkbox-text"],
    contained: styles["checkbox-contained"],
    outlined: styles["checkbox-outlined"],
  }[variant];

  const sizeClass = {
    small: styles["checkbox-small"],
    medium: styles["checkbox-medium"],
    large: styles["checkbox-large"],
  }[sizeCheckbox];

  const colorClass = {
    primary: styles["checkbox-primary"],
    success: styles["checkbox-success"],
    error: styles["checkbox-error"],
  }[color];

  const stateClass = `
    ${disabled ? styles["checkbox-disabled"] : ""}
    ${error ? styles["checkbox-error-state"] : ""}
    ${required ? styles["checkbox-required"] : ""}
    `;

  const className = `
    ${styles["checkbox"]} 
    ${variantClass} 
    ${sizeClass} 
    ${colorClass} 
    ${stateClass}
  `;

  return (
    <label className={className}>
      <input
        type="checkbox"
        disabled={disabled}
        checked={checked}
        onChange={onChange}
        required={required}
        ref={ref}
        {...rest}
      />
      {label && (
        <span className={styles["checkbox-label"]}>
          {label}
          {required && <span className={styles["checkbox-required-mark"]}> *</span>}
        </span>
      )}
    </label>
  );
}
