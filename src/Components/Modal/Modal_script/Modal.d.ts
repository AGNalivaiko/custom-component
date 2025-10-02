import "..main.css";
import { ReactNode } from "react";
type ModalProps = {
  open?: boolean;
  onClose?: () => void;
  children: ReactNode;
};
declare function Modal({ open, onClose, children }: ModalProps): React.ReactElement | null;
export default Modal;
//# sourceMappingURL=Modal.d.ts.map
