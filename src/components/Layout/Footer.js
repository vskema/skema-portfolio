import React from "react";

import classes from './Footer.module.css';

const Footer = props => {

    return (
        <React.Fragment>
            <div className={classes['container']}>

                <div className={classes['header-wrapper']}>
                    <h1>Vaidotas Skema</h1>
                    <p>Frontend developer</p>
                </div>

                <div className={classes['social-icons']}>
                    <a href='https://www.linkedin.com/in/vaidotas-skema/' target="_blank" className={classes}>
                        <i  className='fab fa-linkedin fa-2x' />
                    </a>
                    <a href='https://github.com/vskema' target='_blank' className={classes}>
                        <i  className='fab fa-github fa-2x' />
                    </a>
                </div>

                <div className={classes['copyright']}>
                    <p>&copy; Skema. All rights reserved</p>
                </div>
            </div>



        </React.Fragment>
    );
};

export default Footer;