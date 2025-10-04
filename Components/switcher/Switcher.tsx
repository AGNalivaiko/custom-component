import styles from "./swithcer.module.css";
import { ChangeEventHandler, RefObject } from "react";

type SwitcherProp = {
  checked?: boolean;
  onChange?: ChangeEventHandler;
  disabled?: boolean;
  ref?: RefObject<HTMLInputElement>;
};

export function Switcher({
  checked,
  onChange,
  disabled = false,
  ref,
}: SwitcherProp): React.ReactElement {
  return (
    <label
      className={`${styles["switch"]}
        ${disabled ? styles["disabled"] : ""} 
        ${checked ? styles["myChecked"] : ""}`}
    >
      <input
        ref={ref}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className={styles["switch__input"]}
      />
      <span className={styles["switch__slider"]}></span>
    </label>
  );
}
