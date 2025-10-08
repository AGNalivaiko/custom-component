import styles from "./Modal.module.css";
import { createPortal } from "react-dom";
import { ModalProps } from "./types";
import { FC } from "react";

export const Modal: FC<ModalProps> = ({ open, onClose, children }) => {
  if (!open) return null;

  const container = document.getElementById("modal");
  if (!container) return null;

  return createPortal(
    <div className={styles.modalBackdrop} onClick={onClose} data-testid="modal-backdrop">
      <dialog
        open
        className={styles.modalDialog}
        onClick={(e) => e.stopPropagation()}
        data-testid="modal-dialog"
      >
        <button className={styles.modalClose} onClick={onClose} data-testid="modal-close">
          ✕
        </button>
        {children}
      </dialog>
    </div>,
    container,
  );
};
