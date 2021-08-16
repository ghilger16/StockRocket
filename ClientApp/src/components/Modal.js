import React from 'react';
import ReactDom from "react-dom";

const Modal = ({ open, children, onClose }) => {
    if (!open) return null

    return ReactDom.createPortal(
        <>
            <div class="modal-wrapper" />
            <div class="modal-container">
                <h1 class="d-flex justify-content-end mr-2"onClick={onClose}> <i class="ri-close-line"/> </h1>
                {children}
            </div>
            
        </>,
        document.getElementById('portal')
        
    );
};

export default Modal