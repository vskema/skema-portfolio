import React, {useState} from "react";

import classes from './Header.module.css';

const Header = props => {

    const[open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!open);
    }

    return (
        <React.Fragment>
             <header>

                 <div className={classes['menu-btn']} onClick={toggleMenu}>
                    <span className={open ? classes['menu-btn__burger'] +" "+ classes.open : classes['menu-btn__burger']}></span>
                 </div>

                 <nav className={open ? classes.nav +" "+ classes.open : classes.nav}>
                     <ul className={open ? classes.nav +" "+classes['menu-nav'] +" "+classes.open : classes.nav +" "+ classes['menu-nav']}>
                         <li className={classes['menu-nav__item']}>
                             <i  className='fas fa-home fa-3x' />
                             <a className={classes['menu-nav__link']} href="./#">

                                 Home
                             </a>
                         </li>
                         <li>
                             <i  className='fas fa-user-alt fa-3x' />
                             <a className={classes['menu-nav__link']} href="./#">

                                 About Me
                             </a>
                         </li>
                         <li>
                             <i  className='fas fa-newspaper fa-3x' />
                             <a className={classes['menu-nav__link']} href="./#">

                                 Qualification
                             </a>
                         </li>
                         <li>
                             <i  className='fas fa-envelope fa-3x' />
                             <a className={classes['menu-nav__link']} href="./#">

                                 Contact Me
                             </a>
                         </li>
                     </ul>
                 </nav>
             </header>
        </React.Fragment>
    );
};

export default Header;