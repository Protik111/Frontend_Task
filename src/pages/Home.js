import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Table from '../components/Table';
import styles from '../styles/Home.module.css';

const Home = () => {
    return (
        <div className={`${styles.home} container-fluid p-0`}>
            <Navbar></Navbar>
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10">
                    <Table></Table>
                </div>
            </div>
        </div>
    );
};

export default Home;