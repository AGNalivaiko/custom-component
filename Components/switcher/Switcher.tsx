import styles from "./Swithcer.module.css";
import { SwitcherProp } from "./types";
import classNames from "classnames/bind";
import { FC } from "react";

const cx = classNames.bind(styles);

export const Switcher: FC<SwitcherProp> = ({ checked, onChange, disabled = false, ref }) => {
  const className = cx("switch", {
    switchDisabled: disabled,
    switchChecked: checked,
  });

  return (
    <label className={className}>
      <input
        ref={ref}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className={styles.switchInput}
        data-testid="switcher-input"
      />
      <span className={styles.switchSlider} data-testid="switcher-slider"></span>
    </label>
  );
};
