import { useState } from 'react';
import './userList.css';
import { Box, Grid } from '@mui/material';
import { DataGrid, GridRow } from '@mui/x-data-grid';
import clsx from 'clsx';

import { receiptsData } from '../../../dummyData';

function CustomRow(props) {
    const { className, index, ...other } = props;

    return <GridRow index={index} className={clsx(className, index % 2 === 0 ? 'odd' : 'even')} {...other} />;
}

export default function ReceiptsList() {
    const [data, setData] = useState(receiptsData);

    const columns = [
        { field: 'id', headerName: 'ID', width: 50, hide: true },
        {
            field: 'customername',
            headerName: 'Customer Name',
            width: 120,
            renderCell: (params) => {
                return <div className="userListUser">{params.row.customername}</div>;
            }
        },

        {
            field: 'tin',
            headerName: 'Tin Number',
            width: 100
        },

        {
            field: 'amount',
            headerName: 'Amount',
            width: 100
        },

        {
            field: 'description',
            headerName: 'Description',
            width: 150
        },
        {
            field: 'date',
            headerName: 'Date',
            width: 150
        }
    ];

    return (
        <Grid container spacing={0} direction="column" alignItems="center" justifyContent="flex-start" style={{ minHeight: '100%' }}>
            <Box
                sx={{
                    height: 400,
                    width: '110%',
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
                    rowsPerPageOptions={[10]}
                    disableSelectionOnClick
                />
            </Box>
        </Grid>
    );
}
