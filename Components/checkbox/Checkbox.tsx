import styles from "./Checkbox.module.css";
import classNames from "classnames/bind";
import { CustomCheckboxProps } from "./types";
import { FC } from "react";

const cx = classNames.bind(styles);

export const CustomCheckbox: FC<CustomCheckboxProps> = ({
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
}) => {
  const className = cx(
    "checkbox",
    `checkbox${variant.charAt(0).toUpperCase() + variant.slice(1)}`,
    `checkbox${sizeCheckbox.charAt(0).toUpperCase() + sizeCheckbox.slice(1)}`,
    `checkbox${color.charAt(0).toUpperCase() + color.slice(1)}`,
    {
      checkboxDisabled: disabled,
      checkboxErrorState: error,
      checkboxRequired: required,
    },
  );

  return (
    <label className={className} data-testid="checkbox-label">
      <input
        type="checkbox"
        disabled={disabled}
        checked={checked}
        onChange={onChange}
        required={required}
        ref={ref}
        data-testid="checkbox-input"
      />
      {label && (
        <span className={styles.checkboxLabel} data-testid="checkbox-text">
          {label}
          {required && (
            <span className={styles.checkboxRequiredMark} data-testid="checkbox-required">
              *
            </span>
          )}
        </span>
      )}
    </label>
  );
};
