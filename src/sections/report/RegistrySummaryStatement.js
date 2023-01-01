import React from "react";

import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    height: 'auto !important',
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#2a0a4e',
      color: theme.palette.common.white,
      padding: 0
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
      padding: 0
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    height: '5px',
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
      padding: 0
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
      padding: 0

    },
  })); 
 

 export const RegistrySummaryStatement = React.forwardRef((props, ref) => {
    const { data } = props
    console.log(data)
return  ( <div ref={ref}> 

            { data.map((e)=>{

            let TTotal = e.payload.reduce(function (acc, obj) { return acc + parseFloat(obj.actual_total); }, 0);
            let TExpenditure = e.payload.reduce(function (acc, obj) { return acc + parseFloat(obj.exp_total); }, 0);
            let TCardPaid = e.payload.reduce(function (acc, obj) { return acc + parseFloat(obj.card_paid); }, 0);
            let TCashPaid = e.payload.reduce(function (acc, obj) { return acc + parseFloat(obj.cash_paid); }, 0);
            let TCashBalance = e.payload.reduce(function (acc, obj) { return acc + parseFloat(obj.cash_balance); }, 0);

              return (
                <>
              <div sx={{display:'table-header-group'}}>
              <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    p: 0.5,
                    m: 0.5,
                    color:'white',
                    bgcolor: '#2a0a4e',
                    justifyContent: 'space-between'
                  }}
                  component={Paper}
                >
                  <div>
                      <Typography variant="h6" component="h5">
                      <b>{e.store.bname}</b>
                  </Typography> 
                  <Typography variant="h7" component="p">
                  {e.store.address}
                  </Typography> 
                  </div>
                  <div>
                  <div sx={{textAlign:'end'}}>
                  <Typography component="div">
                    <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <div> <b>From Date</b></div>
                    <div style={{width:'10px'}}></div>
                     <div> {e.fdate.slice(0,15)} </div>
                     </Box>
                  </Typography> 
                  <Typography  component="div">   
                  <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <div><b>To Date</b></div>
                    <div style={{width:'10px'}}></div>
                    <div> {e.tdate.slice(0,15)}</div>
                  </Box>       
                  </Typography> 
                  </div>
          
                  </div>
                </Box>
                </div>
          
                <main >
                        <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                            <TableRow style={{height: 2}}>
                                  <StyledTableCell  component="th" scope="row" align="center">ID</StyledTableCell>
                                  <StyledTableCell  component="th" scope="row" align="center">From Date</StyledTableCell>
                                  <StyledTableCell  component="th" scope="row" align="center">Till Date</StyledTableCell>
                                  <StyledTableCell  component="th" scope="row" align="center">Total</StyledTableCell>
                                  <StyledTableCell  component="th" scope="row" align="center">Expenditure</StyledTableCell>
                                  <StyledTableCell  component="th" scope="row" align="center">Card Paid</StyledTableCell>
                                  <StyledTableCell  component="th" scope="row" align="center">Cash Paid</StyledTableCell>
                                  <StyledTableCell  component="th" scope="row" align="center">Cash Balance</StyledTableCell>
                             </TableRow>
                              </TableHead>
                            <TableBody>
                   { e.payload.map((d)=>{
                    return <StyledTableRow>
                    <StyledTableCell  align="center">{d.sid}</StyledTableCell>
                
                    <StyledTableCell  align="center">{d.fdate.split('T')[0]}</StyledTableCell>
               
                    <StyledTableCell  align="center">{d.tdate.split('T')[0]}</StyledTableCell>
                 
                    <StyledTableCell  align="center">{d.actual_total}</StyledTableCell>
                  <StyledTableCell  align="center">{d.exp_total}</StyledTableCell>
                    <StyledTableCell  align="center">{d.card_paid}</StyledTableCell>
                    <StyledTableCell  align="center">{d.cash_paid}</StyledTableCell>
                    <StyledTableCell  align="center">{d.cash_balance}</StyledTableCell>
                    </StyledTableRow>

                   })

                   }
                  </TableBody>
                              <TableHead>
                            <TableRow style={{height: 2}}>
                                  <StyledTableCell  component="th" scope="row" align="center"></StyledTableCell>
                                  <StyledTableCell  component="th" scope="row" align="center"></StyledTableCell>
                                  <StyledTableCell  component="th" scope="row" align="center"></StyledTableCell>
                                  <StyledTableCell  component="th" scope="row" align="center">₹ {TTotal.toLocaleString('en-IN')}</StyledTableCell>
                                  <StyledTableCell  component="th" scope="row" align="center">₹ {TExpenditure.toLocaleString('en-IN')}</StyledTableCell>
                                  <StyledTableCell  component="th" scope="row" align="center">₹ {TCardPaid.toLocaleString('en-IN')}</StyledTableCell>
                                  <StyledTableCell  component="th" scope="row" align="center">₹ {TCashPaid.toLocaleString('en-IN')}</StyledTableCell>
                                  <StyledTableCell  component="th" scope="row" align="center">₹ {TCashBalance.toLocaleString('en-IN')}</StyledTableCell>
                             </TableRow>
                              </TableHead>
                          </Table>
                 </TableContainer>
          
                </main>
                </>
                )

            })
             

              }
      </div>

          
    )
});

