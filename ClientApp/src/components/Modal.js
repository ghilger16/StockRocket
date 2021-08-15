import React from 'react';
import ReactDom from "react-dom";

const Modal = ({ open, children, onClose }) => {
    if (!open) return null

    return  (
        <>
            <div class="modal-wrapper" />
            <div class="modal-content">

                <button onClick={onClose}> X </button>
                {children}

            </div>
        </>
        
    );
};

export default Modal