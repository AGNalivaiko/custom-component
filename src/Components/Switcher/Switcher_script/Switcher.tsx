import "../importsForSwitcher";
import { ChangeEventHandler } from "react";

type SwitcherProp = {
  checked?: boolean;
  onChange?: ChangeEventHandler;
  disabled?: boolean;
};

function Switch({ checked, onChange, disabled = false }: SwitcherProp): React.ReactElement {
  return (
    <label
      className={`switch 
        ${disabled ? "disabled" : ""} 
        ${checked ? "myChecked" : ""}`}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className="switch__input"
      />
      <span className="switch__slider"></span>
    </label>
  );
}

export default Switch;
