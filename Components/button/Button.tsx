import styles from "./button.module.css";
import React, { ReactNode, MouseEventHandler, ButtonHTMLAttributes } from "react";

type ButtonsProp = {
  variant?: "text" | "contained" | "outlined";
  size?: "small" | "medium" | "large";
  color?: "primary" | "success" | "error" | "secondary";
  disabled?: boolean;
  loading?: boolean;
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
} & ButtonHTMLAttributes<HTMLButtonElement>;

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
  const baseClass = styles.btn;

  const variantClass = {
    text: styles["btn-text"],
    contained: styles["btn-contained"],
    outlined: styles["btn-outlined"],
  }[variant];

  const sizeClass = {
    small: styles["btn-small"],
    medium: styles["btn-medium"],
    large: styles["btn-large"],
  }[size];

  const colorClass = color === "primary" ? "" : styles[`btn-${variant}-${color}`];

  const disabledClass = disabled ? styles["btn-disabled"] : "";

  const className = [baseClass, variantClass, sizeClass, colorClass, disabledClass]
    .filter(Boolean)
    .join(" ");
  console.log(styles);

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
