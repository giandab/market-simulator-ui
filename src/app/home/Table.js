"use client"
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



export default function BasicTable(params) {
  return (
    <TableContainer sx={{backgroundColor:"#485c61ff",minWidth: 200, maxWidth:500}} component={Paper}>
      <Table sx={{ minWidth: 200, maxWidth:500}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ color:"#FF847C"}}>Product</TableCell>
            <TableCell sx={{ color:"#FF847C"}} align="right">Amount</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {params.positions.map((positions) => (
            <TableRow
              key={positions.product}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {positions.product}
              </TableCell>
              <TableCell align="right">{positions.amount}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
