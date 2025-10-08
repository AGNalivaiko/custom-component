import styles from "./TextArea.module.css";
import classNames from "classnames/bind";
import { TextFieldProp } from "./types";
import { ChangeEvent, useCallback, useState } from "react";
import { FC } from "react";

const cx = classNames.bind(styles);

export const TextField: FC<TextFieldProp> = ({
  variant = "outlined",
  sizeField = "medium",
  label = "",
  required = false,
  disabled = false,
  readOnly = false,
  error = false,
  helperText = "",
  value,
  onChange: onChangeFromProps,
  ref,
}: TextFieldProp) => {
  const [valueState, setValueState] = useState(value ?? "");

  const className = cx(
    "textfieldContainer",
    `${variant}`,
    `textfield${sizeField.charAt(0).toUpperCase() + sizeField.slice(1)}`,
    {
      textfieldDisabled: disabled,
      textfieldError: error,
    },
  );

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value;
      setValueState(val);
      onChangeFromProps?.(val, e);
    },
    [onChangeFromProps],
  );

  return (
    <div className={className} data-testid="textfield-container">
      <input
        ref={ref}
        id={`textfield-${label}`}
        value={valueState}
        onChange={onChange}
        disabled={disabled}
        readOnly={readOnly}
        required={required}
        data-testid="textfield-input"
      />
      {label && (
        <label
          htmlFor={`textfield-${label}`}
          className={cx({ filled: !!valueState })}
          data-testid="textfield-label"
        >
          {label} {required ? "*" : ""}
        </label>
      )}
      {helperText && (
        <span className={styles.helperText} data-testid="textfield-helper">
          {helperText}
        </span>
      )}
    </div>
  );
};
