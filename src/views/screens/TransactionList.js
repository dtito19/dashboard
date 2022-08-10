// import './userList.css';
// import { DataGrid } from '@mui/x-data-grid';
// import { DeleteOutline } from '@mui/icons-material';
// import { userRows } from '../../dummyData';
// import { Link } from 'react-router-dom';
// import { useState } from 'react';
// import { Box } from '@mui/material';

// export default function UserList() {
// const [data, setData] = useState(userRows);

// const handleDelete = (id) => {
//     setData(data.filter((item) => item.id !== id));
// };

// const columns = [
//     { field: 'id', headerName: 'ID', width: 90 },
//     {
//         field: 'fullname',
//         headerName: 'Fullname',
//         width: 200,
//         renderCell: (params) => {
//             return (
//                 <div className="userListUser">
//                     <img className="userListImg" src={params.row.avatar} alt="" />
//                     {params.row.username}
//                 </div>
//             );
//         }
//     },
//     { field: 'phone', headerName: 'Phone Number', width: 200 },
//     {
//         field: 'status',
//         headerName: 'Status',
//         width: 120
//     },
//     {
//         field: 'business',
//         headerName: 'Business Name',
//         width: 160
//     },

//     {
//         field: 'tin',
//         headerName: 'Tin Number',
//         width: 160
//     },
//     {
//         field: 'location',
//         headerName: 'Location',
//         width: 160
//     },
//     {
//         field: 'nida',
//         headerName: 'National ID',
//         width: 160
//     },
//     {
//         field: 'action',
//         headerName: 'Action',
//         width: 200,
//         renderCell: (params) => {
//             return (
//                 <>
//                     <Link to={'/view/' + params.row.id}>
//                         <button className="userListEdit">View</button>
//                     </Link>
//                     <Link to={'/edit/' + params.row.id}>
//                         <button className="userListEdit">Edit</button>
//                     </Link>
//                     <DeleteOutline className="userListDelete" onClick={() => handleDelete(params.row.id)} />
//                 </>
//             );
//         }
//     }
// ];

//     return (
//         <Box>
//             <DataGrid rows={data} disableSelectionOnClick columns={columns} checkboxSelection />
//         </Box>
//     );
// }

import React, { useState } from 'react';
import './userList.css';

import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { transactioData } from '../../dummyData';
import { Link } from 'react-router-dom';

export default function TransactionList() {
    const [data, setData] = useState(transactioData);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

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
            width: 100,
            renderCell: (params) => {
                return <div className="userListUser">{params.row.fullname}</div>;
            }
        },

        { field: 'receiptID', headerName: 'Receipt ID', width: 100 },

        {
            field: 'businessName',
            headerName: 'Business Name',
            width: 180
        },

        {
            field: 'amount',
            headerName: 'Amount',
            width: 150
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
                        <Link to={'/edit/' + params.row.id}>
                            <button className="userListEdit">Edit</button>
                        </Link>
                        <DeleteOutline className="userListDelete" onClick={() => handleDelete(params.row.id)} />
                    </>
                );
            }
        }
    ];

    return (
        <Box sx={{ height: 500, width: '80%' }}>
            <DataGrid rows={data} columns={columns} pageSize={10} rowsPerPageOptions={[10]} disableSelectionOnClick />
        </Box>
    );
}
