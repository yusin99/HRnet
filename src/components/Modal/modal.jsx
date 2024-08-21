import React from 'react';
import "./modal.css"

function Modal({ onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Employee Created Successfully!</h2>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Modal;
