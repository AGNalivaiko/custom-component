import styles from "./swithcer.module.css";
import { SwitcherProp } from "./Switcher.types";
import classNames from "classnames/bind";

export function Switcher({
  checked,
  onChange,
  disabled = false,
  ref,
}: SwitcherProp): React.ReactElement {
  const cx = classNames.bind(styles);

  const className = cx("switch", {
    disable: disabled,
    checked: checked,
  });

  return (
    <label className={className}>
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
