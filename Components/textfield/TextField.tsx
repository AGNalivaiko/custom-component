import styles from "./textfield.module.css";
import { RefObject, useState } from "react";

type TextFieldProp = {
  variant?: "filled" | "standard" | "outlined";
  size?: "small" | "medium" | "standard";
  label?: string;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  error?: boolean;
  helperText?: string;
  ref?: RefObject<HTMLInputElement>;
};

export function TextField({
  variant = "outlined",
  size = "medium",
  label = "",
  required = false,
  disabled = false,
  readOnly = false,
  error = false,
  helperText = "",
  ref,
}: TextFieldProp): React.ReactElement {
  const [value, setValue] = useState("");

  const variants = {
    outlined: styles["outlined"],
    filled: styles["filled"],
    standard: styles["standard"],
  }[variant];

  const sizes = {
    small: styles["small"],
    medium: styles["medium "],
    standard: styles["large"],
  }[size];

  const className = `${styles["textfield-container"]} 
    ${variants}
    ${sizes}
    ${disabled ? styles["textfield-disabled"] : ""}
    ${error ? styles["textfield-error"] : ""}
    `;

  return (
    <div className={className}>
      <input
        ref={ref}
        id={`textfield-${label}`}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={disabled}
        readOnly={readOnly}
        required={required}
      />
      {label && (
        <label htmlFor={`textfield-${label}`} className={value ? "filled" : ""}>
          {label} {required ? "*" : ""}
        </label>
      )}
      {helperText && <span className="helper-text">{helperText}</span>}
    </div>
  );
}
