import React from "react";

import classes from './Qualification.module.css';

const Qualification = props => {

    const renderedCourse = () => {
        return props.courses.map((course, index) => {
            if(index % 2 === 0){
                return (
                    <div className={classes['education-wrapper']}>
                       <div className={classes['education-text__left']}>
                           {course.course}
                           {course.year}
                       </div>

                       <div className={classes['education-text__right']}>

                       </div>
                    </div>
                )
            } else {
                return (
                    <div className={classes['education-wrapper']}>
                        <div className={classes['education-text__left']}>

                        </div>

                        <div className={classes['education-text__right']}>
                            {course.course}
                            {course.year}
                        </div>
                    </div>
                )
            }
        })
    }

    return (
        <div className={classes['container']}>
            <h1>Qualification</h1>
            <p>My education / curses</p>


                {renderedCourse()}


        </div>
    );
};

export default Qualification;
