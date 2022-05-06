import React from 'react';
import styles from '../styles/Table.module.css';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'Date Updated', headerClassName: 'super-app-theme--header', width: 140 },
    { field: 'title', headerName: 'Title', headerClassName: 'super-app-theme--header', width: 120 },
    { field: 'details', headerName: 'Details', headerClassName: 'super-app-theme--header', width: 270 },
    { field: 'status', headerName: 'Status', headerClassName: 'super-app-theme--header', width: 150 },
    { field: 'quantity', headerName: 'Quantity', headerClassName: 'super-app-theme--header', width: 100 },
    { field: 'price', headerName: 'Price', headerClassName: 'super-app-theme--header', width: 110 },
    { field: 'amount', headerName: 'Amount', headerClassName: 'super-app-theme--header', width: 110 }
];

const rows = [
    { id: '11 Nov 2021', title: 'Hammer', details: 'This is a hammer to work with', status: 'Alright 🟢', quantity: '200/300', price: '$10', amount: '$2000.00' },
    { id: '10 Nov 2021', title: 'Hammer', details: 'This is a Screw to work with', status: 'Alright 🟢', quantity: '122/230', price: '$10', amount: '$1220.00' },
    { id: '6 Nov 2021', title: 'Hammer', details: 'Wood plan will be used to do woodworks, duh', status: 'In Progress 🟠', quantity: '100/300', price: '$10', amount: '$150.00' },
    { id: '28 Oct 2021', title: 'Hammer', details: '-', status: 'Out of Stock 🔴', quantity: '0/200', price: '$10', amount: '$0.00' },
    { id: '22 Oct 2021', title: 'Hammer', details: '-', status: 'Out of Stock 🔴', quantity: '0/200', price: '$10', amount: '$0.00' },
    { id: '9 Oct 2021', title: 'Hammer', details: '-', status: 'Out of Stock 🔴', quantity: '0/200', price: '$10', amount: '$0.00', },
    { id: '5 Oct 2021', title: 'Hammer', details: 'This is a hammer to work with', status: 'Alright 🟢', quantity: '200/300', price: '$10', amount: '$2000.00' },
    { id: '5 Oct 2021', title: 'Hammer', details: 'This is a hammer to work with', status: 'Alright 🟢', quantity: '200/300', price: '$10', amount: '$2000.00' },
    { id: '1 Oct 2021', title: 'Hammer', details: 'This is a hammer to work with', status: 'Alright 🟢', quantity: '200/300', price: '$10', amount: '$2000.00' },
    { id: '23 Sept 2021', title: 'Hammer', details: 'This is a hammer to work with', status: 'Alright 🟢', quantity: '200/300', price: '$10', amount: '$2000.00' },
];

const Table = () => {
    return (
        <div>
            <div>
                <h5 className={styles.title}>Inventory</h5>
                <div>
                    <div style={{ border: '1px solid #E5E5E6', width: '1204px' }}></div>
                </div>
            </div>
            <div className={`${styles.tableContainer} mt-4 ms-4`}>
                <div className="pt-4 ms-4">
                    <input className={styles.search} placeholder="&#61442; Search" type="search" name="search" id="search" />
                </div>
                <div className="mt-4" style={{ height: '80%', width: '95%' }}>
                    <DataGrid
                        sx={{
                            '& .super-app-theme--header': {
                                backgroundColor: '#FDF4ED',
                              }
                        }}
                        rows={rows}
                        columns={columns}
                        // pageSize={10}
                        // rowsPerPageOptions={[5]}
                        checkboxSelection
                    />
                </div>
            </div>
        </div>
    );
};

export default Table;