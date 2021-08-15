import React from 'react';

const Modal = ({ open, children, onClose }) => {
    if (!open) return null

    return (
        <div class="modal-wrapper">
            <div class="modal-backdrop">
                <div class="modal-card">
                    <button onClick={onClose}> X </button>
                    {children}
                </div>
            </div>
        </div >
    );
};

export default Modal