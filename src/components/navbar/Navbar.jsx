import React, { useState } from 'react';
import styles from "./Navbar.module.css";
import Logo from '../../images/logo.png';
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch, AiOutlineUser } from 'react-icons/ai';
export const Navbar = () => {
    const [nav, setNav] = useState(false);

  return (
    <header className={styles.navbar}>
        <p>Drive.it</p>
        <nav>
            <ul className={nav ? [styles.menu, styles.active].join(' '): styles.menu}>
                <li>
                    <a href="/">Learn More</a>
                </li>
                <li>
                    <a href="/">Log In</a>
                </li>
                <li>
                    <a href="/">Sign Up</a>
                </li>
                <li>
                    <a href=""><AiOutlineSearch className='icon'/></a>
                </li>
                <li>
                    <a href=""><AiOutlineUser className='icon'/></a>
                </li>
            </ul>
        </nav>
        <div className={styles.mobile_btn} onClick={() =>setNav(!nav)}>
            { nav ? <AiOutlineClose/> : <AiOutlineMenu/>}    
        </div>    
    </header>
  )
}
