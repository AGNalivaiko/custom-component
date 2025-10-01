import "./importsStylesForTextField";
import { useState } from "react";

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

function TextField({
  variant = "outlined",
  size = "medium",
  label = "",
  required = false,
  disabled = false,
  readOnly = false,
  error = false,
  helperText = "",
}: TextFieldProp): React.ReactElement {
  const [value, setValue] = useState("");

  const variants = {
    outlined: "outlined",
    filled: "filled",
    standard: "standard",
  }[variant];

  const sizes = {
    small: "small",
    medium: "medium ",
    standard: "large",
  }[size];

  const className = `textfield-container 
    ${variants}
    ${sizes}
    ${disabled ? "textfield-disabled" : ""}
    ${error ? "textfield-error" : ""}
    `;

  return (
    <div className={className}>
      <input
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

export default TextField;
