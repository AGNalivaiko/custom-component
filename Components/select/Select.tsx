import styles from "./Select.module.css";
import { useState } from "react";
import { SelectProps } from "./types";
import classNames from "classnames/bind";
import { FC } from "react";

const cx = classNames.bind(styles);

export const Select: FC<SelectProps> = ({
  label = "Select",
  options = [],
  variant = "standard",
  disabled = false,
  required = false,
  error = false,
  helperText = "",
}) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string>("");

  const classNameSelectContainer = cx("selectContainer", {
    filled: variant === "filled",
    outlined: variant === "outlined",
    standard: variant === "standard",
    disabled,
    error,
  });

  const classNameArrow = cx("arrow", { arrowOpen: open });

  const toggleOpen = () => {
    if (!disabled) setOpen(!open);
  };

  const handleSelect = (value: string) => {
    setSelected(value);
    setOpen(false);
  };

  return (
    <div className={classNameSelectContainer} data-testid="select-container">
      <div
        className={styles.selectInput}
        onClick={toggleOpen}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") toggleOpen();
        }}
        data-testid="select-input"
      >
        <span className={cx("selectedValue", { filled: selected })} data-testid="selected-value">
          {selected || ""}
        </span>
        <label className={selected ? styles.filled : ""} data-testid="select-label">
          {label} {required ? "*" : ""}
        </label>
        <span className={classNameArrow} data-testid="select-arrow">
          ▾
        </span>
      </div>

      {open && (
        <ul className={styles.selectDropdown} role="listbox" data-testid="select-listbox">
          {options.map((opt) => (
            <li
              key={opt.value}
              className={styles.selectOption}
              onClick={() => handleSelect(opt.label)}
              role="option"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") handleSelect(opt.label);
              }}
              data-testid={`select-option-${opt.value}`}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}

      {helperText && (
        <span className={styles.helperText} data-testid="select-helper">
          {helperText}
        </span>
      )}
    </div>
  );
};
