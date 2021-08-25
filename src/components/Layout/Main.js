import React from "react";
import classes from "./Main.module.css";

const Main = props => {


    return (
        <React.Fragment>
            <main>

                <div className={classes['social-icons']}>
                        <a className={classes}>
                            <i  className='fab fa-linkedin fa-2x' />
                        </a>
                        <a className={classes}>
                            <i  className='fab fa-github fa-2x' />
                        </a>
                </div>

                <div className={classes.home}>
                    <h1>Hi, My Name Is Vaidotas</h1>
                    <h2>Frontend developer</h2>
                    <p>I am entry level frontend developer, passionate about new experience, code and quality</p>

                    <button>Contact Me</button>
                </div>

            </main>
        </React.Fragment>
    );
};

export default Main;