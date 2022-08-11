import { useState } from 'react';
import './userList.css';

import Box from '@mui/material/Box';
import { DataGrid, GridRow } from '@mui/x-data-grid';
import clsx from 'clsx';

import { DeleteOutline } from '@mui/icons-material';
import { userRows } from '../../dummyData';
import { Link } from 'react-router-dom';

//Custom function
function CustomRow(props) {
    const { className, index, ...other } = props;

    return <GridRow index={index} className={clsx(className, index % 2 === 0 ? 'odd' : 'even')} {...other} />;
}

export default function UserList() {
    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

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

        {
            field: 'status',
            headerName: 'Status',
            width: 80
        },
        { field: 'phoneNumber', headerName: 'Phone Number', width: 120 },

        {
            field: 'businessName',
            headerName: 'Business Name',
            width: 140
        },

        {
            field: 'tinNumber',
            headerName: 'Tin Number',
            width: 100
        },
        {
            field: 'location',
            headerName: 'Location',
            width: 100
        },
        {
            field: 'nidaNumber',
            headerName: 'National ID',
            width: 100
        },
        {
            field: 'transaction',
            headerName: 'Transactions',
            width: 100
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 180,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={'/view/' + params.row.id}>
                            <button className="userListEdit">View</button>
                        </Link>
                        {/* <Link to={'/edit/' + params.row.id}>
                            <button className="userListEdit">Edit</button>
                        </Link> */}
                        <DeleteOutline className="userListDelete" onClick={() => handleDelete(params.row.id)} />
                    </>
                );
            }
        }
    ];

    return (
        <Box
            sx={{
                height: 500,
                width: '100%',
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
    );
}
