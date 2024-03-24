import React from "react";
import "../style/ModalInfo.scss";


const ModalInfo = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
  
    return (
      <div className="modal-overlay3">
        <div className="modal3">{children}</div>
      </div>
    );
  };

export default ModalInfo;
