import "../importsStylesForSelects";
import React, { useState } from "react";

type Option = {
  label: string;
  value: string;
};

type SelectsProps = {
  variant?: "outlined" | "filled" | "standard";
  label?: string;
  options?: Option[];
  disabled?: boolean;
  required?: boolean;
  error?: boolean;
  helperText?: string;
};

function Selects({
  label = "Select",
  options = [],
  variant = "standard",
  disabled = false,
  required = false,
  error = false,
  helperText = "",
}: SelectsProps): React.ReactElement {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string>("");

  const variants = {
    outlined: "outlined",
    filled: "filled",
    standard: "standard",
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
      className={`select-container ${variants} 
        ${disabled ? "disabled" : ""} 
        ${error ? "error" : ""}`}
    >
      <div className="select-input" onClick={toggleOpen}>
        <span className={`selected-value ${selected ? "filled" : ""}`}>{selected || ""}</span>
        <label className={selected ? "filled" : ""}>
          {label} {required ? "*" : ""}
        </label>
        <span className={`arrow ${open ? "open" : ""}`}>▾</span>
      </div>

      {open && (
        <ul className="select-dropdown">
          {options.map((opt) => (
            <li key={opt.value} className="select-option" onClick={() => hadleSelect(opt.label)}>
              {opt.label}
            </li>
          ))}
        </ul>
      )}

      {helperText && <span className="helper-text">{helperText}</span>}
    </div>
  );
}

export default Selects;
