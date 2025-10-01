import "./importsStylesForButtons";
import { ReactNode, MouseEventHandler, ButtonHTMLAttributes } from "react";

type ButtonsProp = {
  variant?: "text" | "contained" | "outlined";
  size?: "small" | "medium" | "large";
  color?: "primary" | "success" | "error";
  disabled?: boolean;
  loading?: boolean;
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
} & ButtonHTMLAttributes<HTMLButtonElement>;

function Buttons({
  variant = "contained",
  size = "medium",
  color = "primary",
  disabled = false,
  loading = false,
  children,
  onClick,
  ...rest
}: ButtonsProp): React.ReactElement {
  const variantButton = {
    text: "btn-text",
    contained: "btn-contained",
    outlined: "btn-outlined",
  }[variant];

  const sizeButton = {
    small: "btn-small",
    medium: "btn-medium",
    large: "btn-large",
  }[size];

  const colorClass = color === "primary" ? "" : color;

  const className = `btn ${variantButton} ${sizeButton} ${colorClass} ${
    disabled ? "btn-disabled" : ""
  }`;

  return (
    <button
      className={className}
      disabled={disabled || loading}
      onClick={disabled || loading ? undefined : onClick}
      {...rest}
    >
      {loading && <span className="btn-spinner" />}
      {!loading && children}
    </button>
  );
}

export default Buttons;
