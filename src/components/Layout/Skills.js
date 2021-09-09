import React from "react";

import classes from './Skills.module.css';


const Skills = props => {

    const renderedSkills = () => {
        return props.skills.map((skill) => {
            let percentage = skill.level + '%';
            return (
                <div>
                        <div className={classes['skills__text']}>
                            <h4>{skill.subject}</h4>
                            <h4>{skill.level} %</h4>
                        </div>
                        <div className={classes['skills-container']}>
                            <div style={{width: percentage}} className={classes['skills-container__value']}> </div>
                        </div>
                </div>
            )
        })
    }

    return (
        <React.Fragment>
            <div className={classes.container}>
                <div className={classes['skills-header']}>
                    <h1>Main Skills</h1>
                    <p>My technical level</p>
                </div>

                <div>
                    <div className={classes.skills}>
                        <div className={classes['frontend-container']}>
                        <div className={classes['sills-header_sub']}>
                            <h3><i className="fas fa-desktop"></i> Frontend developer</h3>
                        </div>

                        {renderedSkills()}
                        </div>
                        <div className={classes['designer-container']}>
                        <div className={classes['sills-header_sub']}>
                            <h3><i className="fas fa-pencil-alt"></i> Designer</h3>
                        </div>
                        <div className={classes['skills__text']}>
                            <h4>PHOTOSHOP</h4>
                            <h4>35%</h4>
                        </div>
                        <div className={classes['skills-container']}>
                            <div className={classes['skills-container__value-ps']}> </div>
                        </div>
                        </div>
                    </div>

                </div>

            </div>
        </React.Fragment>
    );
};

export default Skills;