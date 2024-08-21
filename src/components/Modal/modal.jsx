import React, { useEffect, useRef } from 'react';
import './modal.css';


export const Modal = ({
  onClose,
  title,
  children,
  isClosable = true,
  modalStyles = {},
  contentStyles = {},
  textStyles = {},
}) => {
  const modalRef = useRef();

  // Close modal on outside click
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    if (!isClosable) return;

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isClosable]);

  return (
    <div className="modal" style={modalStyles}>
      <div className="modal-content" style={contentStyles} ref={modalRef}>
        {isClosable && (
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        )}
        <h2>{title}</h2>
        <div style={textStyles}>{children}</div>  {/* Applied custom text styles */}
      </div>
    </div>
  );
};
