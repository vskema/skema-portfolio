import React from "react";
import classes from "./Header.module.css";

const Main = props => {


    return (
        <div>
            <div>
                <div>
                    <a className={classes.socialIcons}>
                        <i  className='fab fa-linkedin fa-2x' />
                    </a>
                    <a className={classes.socialIcons}>
                        <i  className='fab fa-github fa-2x' />
                    </a>
                </div>
            </div>
            <div>
                <section>
                    <h2>Hi! My Name Is</h2>
                    <h1>
                        Vaidotas <span>Skema</span>
                    </h1>
                    <button>Susisiekime</button>

                </section>
            </div>
        </div>
    );
};

export default Main;