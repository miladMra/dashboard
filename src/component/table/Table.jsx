import React from 'react';
import './table.scss'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const TableDashboard = () => {
    const rows =[
        {
            id:123456,
            product:'Acer Laptop 15',
            image:'https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_PMwebp_QL65_.jpg',
            customer:'John Smith',
            data:'1 Martch',
            amount:787,
            method:'cash on Delivery',
            status:'Approved'
        },
        {
            id:258963,
            product:'Dell KeyBoard',
            image:'https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_PMwebp_QL65_.jpg',
            customer:'Top Richard',
            data:'3 Aprile',
            amount:187,
            method:'cash on Delivery',
            status:'Pending'
        },
        {
            id:874123,
            product:'Asus Rog Strick',
            image:'https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_PMwebp_QL65_.jpg',
            customer:'Sara Wood',
            data:'14 June',
            amount:1026,
            method:'cash on Delivery',
            status:'Pending'
        },
        {
            id:856238,
            product:'Mouth Targus',
            image:'https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_PMwebp_QL65_.jpg',
            customer:'David San',
            data:'10 Martch',
            amount:90,
            method:'cash on Delivery',
            status:'Approved'
        },
        {
            id:856538,
            product:'Playstation 5',
            image:'https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_PMwebp_QL65_.jpg',
            customer:'Ronald Koman',
            data:'2 Martch',
            amount:726,
            method:'cash on Delivery',
            status:'Pending'
        }
    ]
    return(

        <TableContainer component={Paper} className='table'>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className='tableCell'>ID</TableCell>
              <TableCell className='tableCell'>Product</TableCell>
              <TableCell className='tableCell'>Customer</TableCell>
              <TableCell className='tableCell'>Data</TableCell>
              <TableCell className='tableCell'>Amount</TableCell>
              <TableCell className='tableCell'>Method</TableCell>
              <TableCell className='tableCell'>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell className='tableCell' component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell className='tableCell'>
                    <div className='cellWrapper'>
                        <img src={row.image} alt='' className='image'/>
                        {row.product}
                    </div>
                </TableCell>
                <TableCell className='tableCell'>{row.customer}</TableCell>
                <TableCell className='tableCell'>{row.data}</TableCell>
                <TableCell className='tableCell'>{row.amount}</TableCell>
                <TableCell className='tableCell'>{row.method}</TableCell>
                <TableCell className='tableCell'>
                    <span className={`status ${row.status}`}>{row.status}</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

    )

}

export default TableDashboard;