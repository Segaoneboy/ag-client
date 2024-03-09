import React from 'react'
import styles from './Header.module.css'
import logo from '../images/AG_Logo.png'

function Header(){
    return(
        <>
            <header>
                <div className={styles.logo_block}>
                    <a href="/">
                        <img src={logo} alt="logo" className={styles.logo_img}/>
                    </a>
                </div>
                <div>
                    <ul>
                        <li>
                            <a href="/registration">Registration</a>
                        </li>
                        <li>
                            <a href="/">About us</a>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    );
}
export default Header