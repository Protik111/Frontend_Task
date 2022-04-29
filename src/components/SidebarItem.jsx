import React from 'react';
import styles from '../styles/SidebarItem.module.css';

const SidebarItem = ({ title, icon, active }) => {
    return (
        <>
            <p className={`${styles.item} d-flex align-items-center py-1 ${active ? styles.active : ''}`}><span className="pe-1">{icon}</span>{title}</p>
        </>
    );
};

export default SidebarItem;