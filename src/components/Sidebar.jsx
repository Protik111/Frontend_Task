import React from 'react';
import styles from '../styles/Sidebar.module.css';
import { RiHomeLine, RiFileList2Line } from 'react-icons/ri';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { AiOutlineSetting } from 'react-icons/ai';
import SidebarItem from './SidebarItem';


const Sidebar = () => {
    return (
        <div className={`${styles.lists} px-4`}>
            <div className="mt-4">
                <SidebarItem title={"Dashboard"} icon={<RiHomeLine size={21}></RiHomeLine>}></SidebarItem>
                <SidebarItem title={"Inventory"} icon={<IoDocumentTextOutline size={21}></IoDocumentTextOutline>} active></SidebarItem>
                <SidebarItem title={"Documents"} icon={<RiFileList2Line size={21}></RiFileList2Line>}></SidebarItem>
                <SidebarItem title={"Dashboard"} icon={<AiOutlineSetting size={21}></AiOutlineSetting>}></SidebarItem>
            </div>
            <div className="ms-3">
                <div style={{ borderLeft: '1px solid #E5E5E6', height: '1146px' }}></div>
            </div>
        </div>
    );
};

export default Sidebar;