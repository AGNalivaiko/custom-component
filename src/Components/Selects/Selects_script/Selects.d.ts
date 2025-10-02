import "../importsStylesForSelects";
import React from "react";
type Option = {
  label: string;
  value: string;
};
type SelectsProps = {
  variant?: "outlined" | "filled" | "standard";
  label?: string;
  options?: Option[];
  disabled?: boolean;
  required?: boolean;
  error?: boolean;
  helperText?: string;
};
declare function Selects({
  label,
  options,
  variant,
  disabled,
  required,
  error,
  helperText,
}: SelectsProps): React.ReactElement;
export default Selects;
//# sourceMappingURL=Selects.d.ts.map
