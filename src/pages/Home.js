import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import styles from '../styles/Home.module.css';

const Home = () => {
    return (
        <div className={`${styles.home} container-fluid p-0`}>
            <Navbar></Navbar>
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
            </div>
        </div>
    );
};

export default Home;