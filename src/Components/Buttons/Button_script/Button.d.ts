import "../importsStylesForButtons";
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
declare function Buttons({
  variant,
  size,
  color,
  disabled,
  loading,
  children,
  onClick,
  ...rest
}: ButtonsProp): React.ReactElement;
export default Buttons;
//# sourceMappingURL=Button.d.ts.map
