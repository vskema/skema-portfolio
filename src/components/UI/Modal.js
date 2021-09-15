import React from "react";
import {createPortal} from "react-dom";

import './Modal.css';

const Backdrop = props => {
    return <div onClick={props.onClose} className='backdrop' />
}
const ModalOverlay = props => {
    return (
        <div className='modal'>
            <div className='content'>{props.children}</div>
        </div>
    )
};

const portalElement = document.querySelector('#overlays');

const Modal = props => {

    return (
        <React.Fragment>
            {createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
            {createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </React.Fragment>
    );
};

export default Modal;