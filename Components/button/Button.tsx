import styles from "./button.module.css";
import ClassNames from "classnames/bind";
import { ButtonsProp } from "./Button.types";

export function Button({
  variant = "contained",
  size = "medium",
  color = "primary",
  disabled = false,
  loading = false,
  children,
  onClick,
  ...rest
}: ButtonsProp): React.ReactElement {
  const cx = ClassNames.bind(styles);

  const className = cx("btn", `btn-${variant}`, `btn-${size}`, {
    [`${color}`]: color !== "primary",
    "btn-disabled": disabled,
  });

  return (
    <button
      className={className}
      disabled={disabled || loading}
      onClick={disabled || loading ? undefined : onClick}
      {...rest}
    >
      {loading && <span className={styles["btn-spinner"]} />}
      {!loading && children}
    </button>
  );
}
