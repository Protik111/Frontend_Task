import React from 'react';
import styles from '../styles/Navbar.module.css';
import { IoMdNotificationsOutline } from 'react-icons/io';
import profile from '../images/profile.png';

const Navbar = () => {
    return (
        <nav className={`${styles.container}`}>
            <div className={`${styles.name_search} dropdown`}>
                <div className={styles.links}>
                    <p className="dropdown-toggle ms-5 pt-2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown
                    </p>
                </div>
                <div className={`${styles.links} px-5 ms-5 pt-1`}>
                    <input className={styles.search} placeholder="&#61442; Search" type="search" name="search" id="search" />
                </div>
            </div>
            <div className={`${styles.profiles} me-5`}>
                <span className="px-2">
                    <IoMdNotificationsOutline size={22}></IoMdNotificationsOutline>
                </span>
                <div className="px-2">
                    <img className={styles.profileImg} src={profile}></img>
                </div>
                <div className="dropdown px-2">
                    <p className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        John Doe
                    </p>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;