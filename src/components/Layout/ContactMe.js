import React, {useState} from "react";
import emailjs from 'emailjs-com';

import classes from './Contact.module.css';

const Contact = () => {

    const [sendStatus, setSetStatus] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_x0kx1nh', 'template_f0xll6u', e.target, 'user_YHGpFFNndzBmZ6KAxwZmg')
            .then((result) => {
                setSetStatus(true);
                setTimeout(()=> {
                    setSetStatus(false);
                },1000)
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();

    };

    return (
        <div className={classes['container']} id='contact-me'>
            <h1>Contact Me</h1>

            <div className={classes['contact-form']}>

                <form onSubmit={sendEmail}>
                    <p>Send Message</p>

                    <div className={sendStatus ? classes['sent'] : classes['show']}>
                        <p>Message sent</p>
                    </div>

                    <div className={classes['contact-form__box']}>
                        <input type='text' name='name' required='required' />
                        <span>Name</span>
                    </div>
                    <div className={classes['contact-form__box']}>
                        <input type='text' name='email' required='required' />
                        <span>Email</span>
                    </div>
                    <div className={classes['contact-form__box']}>
                        <textarea name='message' rows="4" required='required'></textarea>
                        <span>Type your Message...</span>
                    </div>

                    <div className={classes['contact-form__box']}>
                        <input type='submit' value='Send' />
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