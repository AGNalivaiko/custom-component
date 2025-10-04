import styles from "./modal.module.css";
import { createPortal } from "react-dom";
import { ReactNode } from "react";

type ModalProps = {
  open?: boolean;
  onClose?: () => void;
  children: ReactNode;
};

export function Modal({ open, onClose, children }: ModalProps): React.ReactElement | null {
  if (!open) {
    return null;
  }

  const container = document.getElementById("modal");
  if (!container) return null;

  return createPortal(
    <div className={styles["modal-backdrop"]} onClick={onClose}>
      <dialog open className={styles["modal-dialog"]} onClick={(e) => e.stopPropagation()}>
        <button className={styles["modal-close"]} onClick={onClose}>
          ✕
        </button>
        {children}
      </dialog>
    </div>,
    container,
  );
}
