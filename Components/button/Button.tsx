import styles from "./Button.module.css";
import classNames from "classnames/bind";
import { ButtonsProp } from "./types";
import { useMemo } from "react";
import { FC } from "react";

const cx = classNames.bind(styles);

export const Button: FC<ButtonsProp> = ({
  variant = "contained",
  size = "medium",
  color = "primary",
  disabled = false,
  loading = false,
  children,
  onClick: clickFromProps,
  ...rest
}) => {
  const className = cx(
    "btn",
    `btn${variant.charAt(0).toUpperCase() + variant.slice(1)}`,
    `btn${size.charAt(0).toUpperCase() + size.slice(1)}`,
    {
      [`${color}`]: color !== "primary",
      btnDisabled: disabled,
    },
  );

  const isActive = disabled || loading;
  const onClick = isActive ? undefined : clickFromProps;
  const content = useMemo(
    () =>
      loading ? <span className={styles.btnSpinner} data-testid="button-spinner" /> : children,
    [loading, children],
  );

  return (
    <button
      className={className}
      disabled={isActive}
      onClick={onClick}
      data-testid="button-element"
      {...rest}
    >
      {content}
    </button>
  );
};
