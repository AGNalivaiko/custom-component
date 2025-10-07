import styles from "./textfield.module.css";
import classNames from "classnames/bind";
import { TextFieldProp } from "./TextField.types";
import { useState } from "react";

export function TextField({
  variant = "outlined",
  sizeField = "medium",
  label = "",
  required = false,
  disabled = false,
  readOnly = false,
  error = false,
  helperText = "",
  ref,
}: TextFieldProp): React.ReactElement {
  const [value, setValue] = useState("");
  const cx = classNames.bind(styles);

  const className = cx("textfield-container", `${variant}`, `${sizeField}`, {
    "textfield-disabled": disabled,
    "textfield-error": error,
  });

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
        <label htmlFor={`textfield-${label}`} className={cx({ filled: !value })}>
          {label} {required ? "*" : ""}
        </label>
      )}
      {helperText && <span className={styles["helper-text"]}>{helperText}</span>}
    </div>
  );
}
