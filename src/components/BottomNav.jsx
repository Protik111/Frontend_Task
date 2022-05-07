import React from 'react';
import styles from '../styles/BottomNav.module.css';
import { RiHomeLine, RiFileList2Line } from 'react-icons/ri';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { AiOutlineSetting } from 'react-icons/ai';
import SidebarItem from './SidebarItem';

const BottomNav = () => {
    return (
        <div className={styles.BottomNav}>
            <div className={styles.items}>
                <SidebarItem title={"Dashboard"} icon={<RiHomeLine size={21}></RiHomeLine>}></SidebarItem>
                <SidebarItem title={"Inventory"} icon={<IoDocumentTextOutline size={21}></IoDocumentTextOutline>} bottom></SidebarItem>
                <SidebarItem title={"Documents"} icon={<RiFileList2Line size={21}></RiFileList2Line>}></SidebarItem>
                <SidebarItem title={"Dashboard"} icon={<AiOutlineSetting size={21}></AiOutlineSetting>}></SidebarItem>
            </div>
        </div>
    );
};

export default BottomNav;