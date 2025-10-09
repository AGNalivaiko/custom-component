import styles from './Modal.module.css';
import { createPortal } from 'react-dom';
import { ModalProps } from './types';
import { FC } from 'react';
import { DATA_TESTID } from './constants';

export const Modal: FC<ModalProps> = ({ open, onClose, children }) => {
  if (!open) return null;

  const container = document.getElementById('modal');
  if (!container) return null;

  return createPortal(
    <div className={styles.modalBackdrop} onClick={onClose} data-testid={DATA_TESTID.backdrop}>
      <dialog
        open
        className={styles.modalDialog}
        onClick={(e) => e.stopPropagation()}
        data-testid={DATA_TESTID.dialog}
      >
        <button className={styles.modalClose} onClick={onClose} data-testid={DATA_TESTID.close}>
          ✕
        </button>
        {children}
      </dialog>
    </div>,
    container
  );
};
