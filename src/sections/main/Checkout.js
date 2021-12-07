import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function CheckOut({formState, plan }) {
    
  return (
    <Box
      component="form"
      sx={{
        marginTop:'20px'
      }}
      maxWidth={500}
      noValidate
      autoComplete="off"
    >
      <div>
            <Grid container spacing={2}>
            <TableContainer component={Paper}>
                                    <Table aria-label="simple table">
                                        <TableBody>
                                        { Object.keys(formState).map((key) => (
                                            <TableRow
                                            key={key}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                            <TableCell component="th" scope="row">
                                                {key}
                                            </TableCell>
                                            <TableCell align="right">{formState[key]}</TableCell>
                                            </TableRow>
                                        ))}
                                        </TableBody>
                                    </Table>
                           </TableContainer>


            </Grid>
       
      </div>
    </Box>
  );
}