import React, { useState } from 'react';
import './userList.css';
import { Box, Grid } from '@mui/material';
import { DataGrid, GridRow } from '@mui/x-data-grid';
import clsx from 'clsx';

import { customerData } from '../../../dummyData';

function CustomRow(props) {
    const { className, index, ...other } = props;

    return <GridRow index={index} className={clsx(className, index % 2 === 0 ? 'odd' : 'even')} {...other} />;
}

export default function CustomerList() {
    const [data, setData] = useState(customerData);

    const columns = [
        { field: 'id', headerName: 'ID', width: 50, hide: true },
        {
            field: 'customername',
            headerName: 'Fullname',
            width: 140,
            renderCell: (params) => {
                return <div className="userListUser">{params.row.customername}</div>;
            }
        },

        {
            field: 'phone',
            headerName: 'Phone Number',
            width: 140
        },

        {
            field: 'tin',
            headerName: 'Tin Number',
            width: 100
        }
    ];

    return (
        <Grid container spacing={0} direction="column" alignItems="center" justifyContent="flex-start" style={{ minHeight: '100%' }}>
            <Box
                sx={{
                    height: 400,
                    width: '75%',
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
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    disableSelectionOnClick
                />
            </Box>
        </Grid>
    );
}
