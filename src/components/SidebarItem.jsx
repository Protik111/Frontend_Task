import React from 'react';
import styles from '../styles/SidebarItem.module.css';

const SidebarItem = ({ title, icon, active, bottom }) => {
    return (
        <div className={`${active ? styles.active : ''} d-flex ps-4 ps-sm-2 mt-sm-2`}>
            <div className="d-flex justify-content-center">
                <span className={`${styles.icon} ${bottom ? styles.bottom : ''}  pe-2 mt-1 `}>{icon}</span>
            </div>
            <div className={styles.title}>
                <p className={`${styles.item} d-flex align-items-center py-1 mt-2`}>{title}</p>
            </div>
        </div>
    );
};

export default SidebarItem;