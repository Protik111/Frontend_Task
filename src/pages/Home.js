import React from 'react';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';

const Home = () => {
    return (
        <div className={`${styles.home} container-fluid p-0`}>
            <Navbar></Navbar>
        </div>
    );
};

export default Home;