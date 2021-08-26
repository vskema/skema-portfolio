import React from "react";

import classes from './Skills.module.css';


const Skills = props => {


    return (
        <React.Fragment>
            <div className={classes.container}>
                <div className={classes['skills-header']}>
                    <h1>Main Skills</h1>
                    <p>My technical level</p>
                </div>

                <div>

                    <div className={classes.skills}>
                        <div className={classes['skills__text']}>
                            <h4>HTML</h4>
                            <h4>75%</h4>
                        </div>
                        <div className={classes['skills-container']}>
                            <div className={classes['skills-container__value-html']}> </div>
                        </div>

                        <div className={classes['skills__text']}>
                            <h4>CSS</h4>
                            <h4>55%</h4>
                        </div>
                        <div className={classes['skills-container']}>
                            <div className={classes['skills-container__value-css']}> </div>
                        </div>

                        <div className={classes['skills__text']}>
                            <h4>JAVASCRIPT</h4>
                            <h4>55%</h4>
                        </div>
                        <div className={classes['skills-container']}>
                            <div className={classes['skills-container__value-js']}> </div>
                        </div>

                        <div className={classes['skills__text']}>
                            <h4>REACT</h4>
                            <h4>50%</h4>
                        </div>
                        <div className={classes['skills-container']}>
                            <div className={classes['skills-container__value-react']}> </div>
                        </div>

                        <div className={classes['skills__text']}>
                            <h4>REDUX</h4>
                            <h4>25%</h4>
                        </div>
                        <div className={classes['skills-container']}>
                            <div className={classes['skills-container__value-redux']}> </div>
                        </div>
                    </div>

                </div>

            </div>
        </React.Fragment>
    );
};

export default Skills;