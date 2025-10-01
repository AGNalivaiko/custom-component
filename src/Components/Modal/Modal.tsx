import "./style/main.css";
import { createPortal } from "react-dom";
import { ReactNode } from "react";

type ModalProps = {
  open?: boolean;
  onClose?: () => void;
  children: ReactNode;
};

function Modal({ open, onClose, children }: ModalProps): React.ReactElement | null {
  if (!open) {
    return null;
  }

  const container = document.getElementById("modal");
  if (!container) return null;

  return createPortal(
    <div className="modal-backdrop" onClick={onClose}>
      <dialog open className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>
        {children}
      </dialog>
    </div>,
    container,
  );
}

export default Modal;
