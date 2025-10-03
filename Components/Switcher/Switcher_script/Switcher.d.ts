import "../importsForSwitcher";
import { ChangeEventHandler } from "react";
type SwitcherProp = {
  checked?: boolean;
  onChange?: ChangeEventHandler;
  disabled?: boolean;
};
declare function Switch({ checked, onChange, disabled }: SwitcherProp): React.ReactElement;
export default Switch;
