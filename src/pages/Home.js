import React from 'react';
import BottomNav from '../components/BottomNav';
import App from '../components/ErrorHandlerForm/App';
import FetchDataByHook from '../components/FetchDataByHook/FetchDataByHook';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Table from '../components/Table';
import styles from '../styles/Home.module.css';

const Home = () => {
    return (
        <div className={`${styles.home} container-fluid p-0`}>
            {/* <Navbar></Navbar> */}
            {/* <div className="row">
                <div className={`${styles.sidebar} col-md-2 col-sm-1 col-xs-0`}>
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 col-sm-10 col-xs-0">
                    <Table></Table>
                </div>
            </div>
            <BottomNav></BottomNav> */}
            {/* <FetchDataByHook></FetchDataByHook> */}
            <App></App>
        </div>
    );
};

export default Home;