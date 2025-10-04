import styles from "./select.module.css";
import React, { useState } from "react";

type Option = {
  label: string;
  value: string;
};

type SelectProps = {
  variant?: "outlined" | "filled" | "standard";
  label?: string;
  options?: Option[];
  disabled?: boolean;
  required?: boolean;
  error?: boolean;
  helperText?: string;
};

export function Select({
  label = "Select",
  options = [],
  variant = "standard",
  disabled = false,
  required = false,
  error = false,
  helperText = "",
}: SelectProps): React.ReactElement {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string>("");

  const variants = {
    outlined: styles["outlined"],
    filled: styles["filled"],
    standard: styles["standard"],
  }[variant];

  function toggleOpen() {
    if (!disabled) {
      setOpen(!open);
    }
  }

  function hadleSelect(value: string) {
    setSelected(value);
    setOpen(false);
  }

  return (
    <div
      className={` ${styles["select-container"]} ${variants} 
        ${disabled ? styles["disabled"] : ""} 
        ${error ? styles["error"] : ""}`}
    >
      <div className={styles["select-input"]} onClick={toggleOpen}>
        <span className={`${styles["selected-value"]} ${selected ? styles["filled"] : ""}`}>
          {selected || ""}
        </span>
        <label className={selected ? "filled" : ""}>
          {label} {required ? "*" : ""}
        </label>
        <span className={`${styles["arrow"]} ${open ? styles["open"] : ""}`}>▾</span>
      </div>

      {open && (
        <ul className={styles["select-dropdown"]}>
          {options.map((opt) => (
            <li
              key={opt.value}
              className={styles["select-option"]}
              onClick={() => hadleSelect(opt.label)}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}

      {helperText && <span className={styles["helper-text"]}>{helperText}</span>}
    </div>
  );
}
