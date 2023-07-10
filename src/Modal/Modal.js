import React from "react";
import ReactDOM from 'react-dom';
import '../Modal/modal.css';

function Modal({children}) {
    return ReactDOM.createPortal(
        <div className="Modal">
            {children}
        </div>,
        document.getElementById('Modal')
    );
}
export { Modal };
