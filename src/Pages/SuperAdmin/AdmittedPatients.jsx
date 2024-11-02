import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

// Icons
import { RiEdit2Fill } from "react-icons/ri";
import { RiDeleteBin6Line } from "react-icons/ri";

const patientData = [
  { no: 1, date: '01/08/2024', id: 20, name: 'John Doe', age: 30, country: 'Nigeria', gender: 'Male' },
  { no: 2, date: '01/08/2024', id: 40, name: 'Jane Smith', age: 45, country: 'Ghana', gender: 'Female' },
  { no: 3, date: '01/08/2024', id: 10, name: 'Mark White', age: 60, country: 'South Africa', gender: 'Male' },
  { no: 4, date: '01/08/2024', id: 55, name: 'Shawn Hampton', age: 65, country: 'USA', gender: 'Female' },
  { no: 5, date: '01/08/2024', id: 15, name: 'Polly Paul', age: 61, country: 'Miami', gender: 'Male' },
  { no: 6, date: '01/08/2024', id: 25, name: 'Mark Hall', age: 50, country: 'Whales', gender: 'Male' },
  { no: 7, date: '01/08/2024', id: 45, name: 'Bill Gate', age: 65, country: 'Gorgia', gender: 'Male' },
  { no: 8, date: '01/08/2024', id: 35, name: 'Ashely Cole', age: 41, country: 'Denmark', gender: 'Male' },
  { no: 9, date: '01/08/2024', id: 5, name: 'Alicia Keys', age: 50, country: 'South Korea', gender: 'Female' },
  { no: 10, date: '01/08/2024', id: 52, name: 'Ben White', age: 30, country: 'Japan', gender: 'Male' },
];

function AdmittedPatients() {
  return (
    <div className='mt-4'>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow className='bg-[#cce5ff] '>
              <TableCell style={{fontSize: '14px', fontWeight: 'bold', color: '#3596f7'}}>No</TableCell>
              <TableCell style={{fontSize: '14px', fontWeight: 'bold', color: '#3596f7'}}>Date</TableCell>
              <TableCell style={{fontSize: '14px', fontWeight: 'bold', color: '#3596f7'}}>ID</TableCell>
              <TableCell style={{fontSize: '14px', fontWeight: 'bold', color: '#3596f7'}}>Name</TableCell>
              <TableCell style={{fontSize: '14px', fontWeight: 'bold', color: '#3596f7'}}>Age</TableCell>
              <TableCell style={{fontSize: '14px', fontWeight: 'bold', color: '#3596f7'}}>Country</TableCell>
              <TableCell style={{fontSize: '14px', fontWeight: 'bold', color: '#3596f7'}}>Gender</TableCell>
              <TableCell style={{fontSize: '14px', fontWeight: 'bold', color: '#3596f7'}}>Settings</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {patientData.slice(0, 5).map((row) => (
              <TableRow key={row.no} className=''>
                <TableCell>{row.no}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.age}</TableCell>
                <TableCell>{row.country}</TableCell>
                <TableCell>{row.gender}</TableCell>
                <TableCell style={{display: 'flex', gap: 5}} >
                  <div
                    variant="contained"
                    style={{ minWidth: 'unset' }}
                    className='flex items-center justify-center cursor-pointer rounded-full w-[30px] h-[30px] bg-[green] '>
                    <RiEdit2Fill className='text-[16px] text-white '/>
                  </div>
                  <div
                    variant="contained"
                    style={{ minWidth: 'unset' }}
                    className='flex items-center justify-center cursor-pointer rounded-full w-[30px] h-[30px] bg-[red] '>
                    <RiDeleteBin6Line className='text-[16px] text-white '/>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {patientData.length > 5 ? (
        <div className='bg-[#e4e6ef] text-text px-4 py-4 flex justify-between items-center rounded-b-lg '>
          <p>Total: {patientData.length} Patient</p>
          <button className='bg-primary text-white py-2 px-4 rounded-lg hover:shadow-lg transition-all '>View All</button>
        </div>
      ) : null}
    </div>
  )
}

export default AdmittedPatients