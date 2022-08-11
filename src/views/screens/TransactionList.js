import React, { useState } from 'react';
import './userList.css';
import { Box, Grid } from '@mui/material';
import { DataGrid, GridRow } from '@mui/x-data-grid';
import clsx from 'clsx';

import { transactioData } from '../../dummyData';

function CustomRow(props) {
    const { className, index, ...other } = props;

    return <GridRow index={index} className={clsx(className, index % 2 === 0 ? 'odd' : 'even')} {...other} />;
}

export default function TransactionList() {
    const [data, setData] = useState(transactioData);

    // const handleDelete = (id) => {
    //     setData(data.filter((item) => item.id !== id));
    // };

    // fullname: 'Jon Snow',
    //   date: '2022-04-28',
    //   receiptID: '1234',
    //   businessName: 'Tukae Pamoja',
    //   amount: 'Tsh 120.00'

    const columns = [
        { field: 'id', headerName: 'ID', width: 50, hide: true },
        {
            field: 'fullname',
            headerName: 'Fullname',
            width: 140,
            renderCell: (params) => {
                return <div className="userListUser">{params.row.fullname}</div>;
            }
        },

        { field: 'receiptID', headerName: 'Receipt ID', width: 120 },

        {
            field: 'businessName',
            headerName: 'Business Name',
            width: 200
        },

        {
            field: 'amount',
            headerName: 'Amount',
            width: 150
        }

        // {
        //     field: 'action',
        //     headerName: 'Action',
        //     width: 180,
        //     renderCell: (params) => {
        //         return (
        //             <>
        //                 <Link to={'/view/' + params.row.id}>
        //                     <button className="userListEdit">View</button>
        //                 </Link>
        //                 <Link to={'/edit/' + params.row.id}>
        //                     <button className="userListEdit">Edit</button>
        //                 </Link>
        //                 <DeleteOutline className="userListDelete" onClick={() => handleDelete(params.row.id)} />
        //             </>
        //         );
        //     }
        // }
    ];

    return (
        <Grid container spacing={0} direction="column" alignItems="center" justifyContent="flex-start" style={{ minHeight: '100%' }}>
            <Box
                sx={{
                    height: 500,
                    width: '65%',
                    '& .odd': {
                        bgcolor: '#cbd4cd'
                    },
                    '& .even': {
                        bgcolor: '#f7fff9'
                    }
                }}
            >
                <DataGrid
                    components={{ Row: CustomRow }}
                    rows={data}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                    disableSelectionOnClick
                />
            </Box>
        </Grid>
    );
}
