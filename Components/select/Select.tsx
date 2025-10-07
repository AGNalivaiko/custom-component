import styles from "./select.module.css";
import { useState } from "react";
import { SelectProps } from "./Select.types";
import classNames from "classnames/bind";

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
  const cx = classNames.bind(styles);

  const classNameSelectContainer = cx("select-container", `select-container-${variant}`, {
    filled: variant === "filled",
    disabled: disabled,
    error: error,
  });
  const classNameSelectedValue = cx("selected-value", { filled: selected });
  const classNameArrow = cx("arrow", { open: open });

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
    <div className={classNameSelectContainer}>
      <div
        className={styles["select-input"]}
        onClick={toggleOpen}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            toggleOpen();
          }
        }}
      >
        <span className={classNameSelectedValue}>{selected || ""}</span>
        <label className={selected ? styles.filled : ""}>
          {label} {required ? "*" : ""}
        </label>
        <span className={classNameArrow}>▾</span>
      </div>

      {open && (
        <ul className={styles["select-dropdown"]} role="listbox">
          {options.map((opt) => (
            <li
              key={opt.value}
              className={styles["select-option"]}
              onClick={() => hadleSelect(opt.label)}
              role="option"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  hadleSelect(opt.label);
                }
              }}
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
