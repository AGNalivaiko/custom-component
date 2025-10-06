import styles from "./checkbox.module.css";
import classNames from "classnames/bind";
import { CustomCheckboxProps } from "./Checkbox.types";

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
  const cx = classNames.bind(styles);

  const className = cx(
    "checkbox",
    `checkbox-${variant}`,
    `checkbox-${sizeCheckbox}`,
    `checkbox-${color}`,
    {
      "checkbox-disabled": disabled,
      "checkbox-error-state": error,
      "checkbox-required": required,
    },
  );

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
