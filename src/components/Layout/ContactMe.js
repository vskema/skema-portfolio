import React from "react";

import classes from './Contact.module.css';

const Contact = () => {

    return (
        <div className={classes['container']}>
            <h1>Contact Me</h1>

            <div className={classes['contact-form']}>

                <form>
                    <p>Send Message</p>

                    <div className={classes['contact-form__box']}>
                        <input type='text' name='' required='required' />
                        <span>Name</span>
                    </div>
                    <div className={classes['contact-form__box']}>
                        <input type='text' name='' required='required' />
                        <span>Email</span>
                    </div>
                    <div className={classes['contact-form__box']}>
                        <textarea rows="4" required='required'></textarea>
                        <span>Type your Message...</span>
                    </div>

                    <div className={classes['contact-form__box']}>
                        <input type='submit' name='' value='Send' />
                    </div>

                </form>

                <div className={classes['contact-info']}>
                    <div className={classes['contact-info__box']}>
                        <h3><i className="fas fa-phone"></i> Phone</h3>
                        <a href='tel:+37065321170'>+370 653 21170</a>
                    </div>
                    <div className={classes['contact-info__box']}>
                        <h3><i className="far fa-envelope"></i> Email</h3>
                        <a href='mailto:skema.vaidotas@gmail.com'>skema.vaidotas@gmail.com</a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Contact;