import React, { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import styles from './ModalWindow.module.scss';

const ModalWindow = ({ children, closeModal: setRegModal }) => {
  const modalRoot = document.querySelector('#modal-root');
  const handleKeyDown = useCallback(
    e => {
      if (e.code === 'Escape') {
        setRegModal(false);
      }
      if (e.target === e.currentTarget) {
        setRegModal(false);
      }
    },
    [setRegModal],
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown, setRegModal]);

  return createPortal(
    <div className={styles.Overlay} onClick={handleKeyDown}>
      <div className={styles.Modal}>{children}</div>
    </div>,
    modalRoot,
  );
};

export default ModalWindow;
