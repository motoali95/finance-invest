import React from "react";
import "../style/HallSelectModal.scss";


const HallSelectModal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
  
    return (
      <div className="modal-overlay-hall">
        <div className="modal-hall">{children}</div>
      </div>
    );
  };

export default HallSelectModal;