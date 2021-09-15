import React from "react";

import './ModalForm.css';
import Modal from "../UI/Modal";
import Button from "../UI/Button";
import classes from "./Contact.module.css";

const ModalForm = props => {


    return (
        <Modal onClose={props.onClose}>
            <div className='container'>
            <form>
                <p className='about-me'>Send Message</p>
                <div className={'contact-form__box'}>
                    <input type='text' name='name' required='required' />
                    <span>Name</span>
                </div>
                <div className={'contact-form__box'}>
                    <input type='text' name='email' required='required' />
                    <span>Email</span>
                </div>
                <div className={'contact-form__box'}>
                    <textarea name='message' rows="4" required='required'></textarea>
                    <span>Type your Message...</span>
                </div>
                <Button
                    type='button'
                    buttonStyle='btn--primary--solid'
                    buttonSize='btn--medium'
                    onClick={props.onClose}
                >
                    Send message
                </Button>
                <Button
                    type='button'
                    buttonStyle='btn--primary--outline'
                    buttonSize='btn--medium'
                    onClick={props.onClose}
                >
                    Cancel
                </Button>
            </form>
            </div>
        </Modal>
    )
}

export default ModalForm;