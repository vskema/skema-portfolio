import React from "react";
import classes from "./Main.module.css";
import Button from "../UI/Button";

const Main = props => {


    return (
        <React.Fragment>
            <main>

                <div className={classes['social-icons']}>
                        <a href='https://www.linkedin.com/in/vaidotas-skema/' target="_blank" className={classes}>
                            <i  className='fab fa-linkedin fa-2x' />
                        </a>
                        <a href='https://github.com/vskema' target='_blank' className={classes}>
                            <i  className='fab fa-github fa-2x' />
                        </a>
                </div>

                <div className={classes.home}>
                    <h1 id='about-me'>Hi, My Name Is Vaidotas</h1>
                    <h2>Frontend developer</h2>
                    <p>I am entry level frontend developer, passionate about new experience, code and quality</p>

                    <Button
                        type='button'
                        buttonStyle='btn--primary--solid'
                        buttonSize='btn--medium'
                        onClick={props.onShowForm}
                    >
                        Contact me
                    </Button>
                </div>

            </main>
        </React.Fragment>
    );
};

export default Main;