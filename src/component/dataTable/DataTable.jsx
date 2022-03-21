import React from 'react';
import './dataTable.scss'
import { DataGrid } from '@mui/x-data-grid';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { useState } from 'react';
import {columns,rows} from '../../dataTable'


const DataTable = () => {
    
    const [data,setData] = useState(rows)
    const handleClickDelete = (id)=>{
        setData(data.filter(item=>item.id !== id))
    }
    const actionColumns = [
        {
            field: 'actions',
            headerName: 'Actions',
            width: 180,
            renderCell: (params) => {
                return <div className='cellAction'>
                    <Link to='/users/test' style={{ textDecoration: 'none' }}>
                        <div className='view'>View</div>
                    </Link>
                    <div className='delete' onClick={()=>handleClickDelete(params.row.id)}>Delete</div>
                </div>
            },
    
        },
    ]
    return (

        <div className='dataTable' >
            <div className='title'>
                <Link to='/users/new' style={{ textDecoration: 'none' }}>
                    <Button className='btnTitle' variant="contained">Add New User</Button>
                </Link>
            </div>
            <DataGrid
                rows={data}
                className='dataGrid'
                columns={columns.concat(actionColumns)}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>

    )

}

export default DataTable;