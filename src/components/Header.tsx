import React, { useState } from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <header className={styles.header}>
            <div className={styles.burger} onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={styles.title}>Welcome to K9Go.app<span className={styles.welcomeuser}>Please Login</span></div>
            {isOpen && (
                <nav className={styles.nav}>
                    <ul>
                        <li><Link to="/" onClick={toggleMenu}>K9Go Dog Walking</Link></li>
                        <li><Link to="/login" onClick={toggleMenu}>Login / Sign Up</Link></li>
                        <li><Link to="/schedule" onClick={toggleMenu}>Schedule a Walk</Link></li>
                        <li><Link to="/rates" onClick={toggleMenu}>Our Rates</Link></li>
                        <li><Link to="/serviceArea" onClick={toggleMenu}>Service Area</Link></li>
                        <li><Link to="/cancellation" onClick={toggleMenu}>Cancellation & Weather Policy</Link></li>
                        <li><Link to="/insurance" onClick={toggleMenu}>Insurance and Emergencies</Link></li>
                        <li><Link to="/ourDogs" onClick={toggleMenu}>Our Dogs</Link></li>
                        <li><Link to="/about" onClick={toggleMenu}>About K9Go.app</Link></li>
                        <li><Link to="/contact" onClick={toggleMenu}>Contact Us</Link></li>
                        {/* Add more items as needed */}
                    </ul>
                </nav>
            )}
        </header>
    );
}

export default Header;
