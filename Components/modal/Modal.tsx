import styles from "./modal.module.css";
import { createPortal } from "react-dom";
import { ModalProps } from "./Modal.types";

export function Modal({ open, onClose, children }: ModalProps): React.ReactElement | null {
  if (!open) {
    return null;
  }

  const container = document.getElementById("modal");
  if (!container) return null;

  return createPortal(
    <div className={styles["modal-backdrop"]} onClick={onClose}>
      <dialog open className={styles["modal-dialog"]}>
        <button className={styles["modal-close"]} onClick={onClose}>
          ✕
        </button>
        {children}
      </dialog>
    </div>,
    container,
  );
}
