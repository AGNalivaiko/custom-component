// import styles from "./button.module.css";
// import { ReactNode, MouseEventHandler, ButtonHTMLAttributes, RefObject } from "react";

// type ButtonsProp = {
//   variant?: "text" | "contained" | "outlined";
//   size?: "small" | "medium" | "large";
//   color?: "primary" | "success" | "error";
//   disabled?: boolean;
//   loading?: boolean;
//   children: ReactNode;
//   onClick?: MouseEventHandler<HTMLButtonElement>;
//   ref?: RefObject<HTMLButtonElement>;
// } & ButtonHTMLAttributes<HTMLButtonElement>;

// export function Button({
//   variant = "contained",
//   size = "medium",
//   color = "primary",
//   disabled = false,
//   loading = false,
//   children,
//   onClick,
//   ref,
//   ...rest
// }: ButtonsProp): React.ReactElement {
//   const variantClass = {
//     text: styles["btn-text"],
//     contained: styles["btn-contained"],
//     outlined: styles["btn-outlined"],
//   }[variant];

//   const sizeClass = {
//     small: styles["btn-small"],
//     medium: styles["btn-medium"],
//     large: styles["btn-large"],
//   }[size];

//   const colorClass = color === "primary" ? "" : styles[`btn-${variant}-${color}`];

//   const className = [
//     styles.btn,
//     variantClass,
//     sizeClass,
//     colorClass,
//     disabled ? styles["btn-disabled"] : "",
//   ]
//     .filter(Boolean)
//     .join(" ");

//   return (
//     <button
//       className={className}
//       disabled={disabled || loading}
//       onClick={disabled || loading ? undefined : onClick}
//       ref={ref}
//       {...rest}
//     >
//       {loading && <span className={styles["btn-spinner"]} />}
//       {!loading && children}
//     </button>
//   );
// }

import styles from "./button.module.css";
import React, { ReactNode, MouseEventHandler, ButtonHTMLAttributes, forwardRef } from "react";

type ButtonsProp = {
  variant?: "text" | "contained" | "outlined";
  size?: "small" | "medium" | "large";
  color?: "primary" | "success" | "error" | "secondary";
  disabled?: boolean;
  loading?: boolean;
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef<HTMLButtonElement, ButtonsProp>(
  (
    {
      variant = "contained",
      size = "medium",
      color = "primary",
      disabled = false,
      loading = false,
      children,
      onClick,
      ...rest
    },
    ref,
  ) => {
    // базовый класс
    const baseClass = styles.btn;

    // variant
    const variantClass = {
      text: styles["btn-text"],
      contained: styles["btn-contained"],
      outlined: styles["btn-outlined"],
    }[variant];

    // size
    const sizeClass = {
      small: styles["btn-small"],
      medium: styles["btn-medium"],
      large: styles["btn-large"],
    }[size];

    // цвет для variant
    const colorClass = color === "primary" ? "" : styles[`btn-${variant}-${color}`];

    // disabled
    const disabledClass = disabled ? styles["btn-disabled"] : "";

    const className = [baseClass, variantClass, sizeClass, colorClass, disabledClass]
      .filter(Boolean)
      .join(" ");

    return (
      <button
        className={className}
        disabled={disabled || loading}
        onClick={disabled || loading ? undefined : onClick}
        ref={ref}
        {...rest}
      >
        {loading && <span className={styles["btn-spinner"]} />}
        {!loading && children}
      </button>
    );
  },
);

Button.displayName = "Button";