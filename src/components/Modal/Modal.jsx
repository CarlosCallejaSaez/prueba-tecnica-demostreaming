import React from 'react';
import styles from './Modal.module.css'

const Modal = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'white',
      padding: '20px',
      zIndex: 1000
    }}>
      {children}
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default Modal;
