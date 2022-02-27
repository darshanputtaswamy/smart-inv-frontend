import React, { useRef , useEffect} from "react";
import {
    getStatement,
} from 'redux/actions/StatementActions'
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router'; 
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
import { Grid, MenuItem, TextField } from '@mui/material';

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

 
 

export const  Statement = React.forwardRef((props, ref) => {
    const { statement = []  } = useSelector((state) => state.store)
    const { lobDetails,statementSummary  } = props
    const dispatch = useDispatch();
    const router = useRouter();
    const { store, id } = router.query;
    console.log(store)
    console.log(id)
    useEffect(() => {
      if(store && id)  dispatch(getStatement(store, id))
    }, [store, id,dispatch])

    
return  (


    statementSummary  ? (
    <div  ref={ref}>
    <header sx={{display:'table-header-group'}}>
    <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
          justifyContent: 'space-between'
        }}
        component={Paper}
      >
        <div>
            <Typography variant="h6" component="h5">
            <b>{lobDetails.bname}</b>
        </Typography> 
        <Typography variant="h7" component="p">
            {lobDetails.address} - {lobDetails.postal_code}
        </Typography> 
        </div>
        <div>
        <div sx={{textAlign:'end'}}>
        <Typography component="div">
          <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
          <div> 
           <b>From Date</b></div><div> { (new Date(statementSummary.fdate)).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</div>
           </Box>
        </Typography> 
        <Typography  component="div">   
        <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
          <div> 
          <b>To Date</b></div><div> { (new Date(statementSummary.tdate)).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</div>
        </Box>       
        </Typography> 
        </div>

        </div>
      </Box>
      </header>

      <main >

              <TableContainer component={Paper}>
              <Table aria-label="simple table">
                  <TableHead>
                  <TableRow style={{height: 2}}>
                        <StyledTableCell  component="th" scope="row" align="right">Type</StyledTableCell>
                        <StyledTableCell  component="th" scope="row" align="right">Name</StyledTableCell>
                        <StyledTableCell  component="th" scope="row" align="right">Quantity</StyledTableCell>
                        <StyledTableCell  component="th" scope="row" align="right">Open</StyledTableCell>
                        <StyledTableCell  component="th" scope="row" align="right">Received</StyledTableCell>
                        <StyledTableCell  component="th" scope="row" align="right">Total</StyledTableCell>
                        <StyledTableCell  component="th" scope="row" align="right">Closed</StyledTableCell>
                        <StyledTableCell  component="th" scope="row" align="right">Sales</StyledTableCell>
                        <StyledTableCell  component="th" scope="row" align="right">Cost/Unit</StyledTableCell>
                       {/* <StyledTableCell component="th" scope="row" align="right">Auto Total(₹)</StyledTableCell> */}
                        <StyledTableCell component="th" scope="row" align="right"> Total(₹)</StyledTableCell>
                   </TableRow>
                    </TableHead>
                  <TableBody>
          {statement.map(function(item,index){

            return (
                         <StyledTableRow key={index}>
                        <StyledTableCell  align="right">{item.itype}</StyledTableCell>
                    
                        <StyledTableCell  align="right">{item.name}</StyledTableCell>
                   
                        <StyledTableCell  align="right">{item.quantity == -1 ? 'Loose '+ item.mou: item.quantity + ' ' + item.mou}</StyledTableCell>
                     
                        <StyledTableCell  align="right">{item.open}</StyledTableCell>
                      
                        <StyledTableCell  align="right">{item.received}</StyledTableCell>
                        <StyledTableCell  align="right">{parseInt(item.received)+parseInt(item.open)}</StyledTableCell>
                        <StyledTableCell  align="right">{item.closed}</StyledTableCell>

                        <StyledTableCell  align="right">{item.sales}</StyledTableCell>

                        <StyledTableCell  align="right">{item.cost}</StyledTableCell>
                     {/*   <StyledTableCell align="right">{parseFloat(item.auto_total).toFixed(2) }</StyledTableCell> */}
                        <StyledTableCell  align="right">{parseFloat(item.actual_total).toFixed(2) }</StyledTableCell>
                        </StyledTableRow>
 
            )
          })}
  
                             </TableBody>
                </Table>
       </TableContainer>
<Paper  elevation={2} sx={{ marginTop:'3rem', width:'50%', float: 'right' }} >
<Typography variant="h6" component="div">
        Statement Summary
    </Typography>
<TableContainer>
<Table>
<TableBody>
<StyledTableRow style={{height: 5}}>
<StyledTableCell  align="right">₹ Total</StyledTableCell>
<StyledTableCell  align="right">{parseFloat(statementSummary.actual_total).toFixed(2)}</StyledTableCell>
</StyledTableRow>     

<StyledTableRow style={{height: 5}}>
<StyledTableCell  align="right">₹ Expenditure</StyledTableCell>
<StyledTableCell  align="right">{statementSummary.exp_total}</StyledTableCell>
</StyledTableRow>     

<StyledTableRow style={{height: 5}}>
<StyledTableCell  align="right">₹ Card Paid</StyledTableCell>
<StyledTableCell  align="right">{statementSummary.card_paid}</StyledTableCell>
</StyledTableRow>     


<StyledTableRow style={{height: 5}}>
<StyledTableCell  align="right">₹ Cash Paid</StyledTableCell>
<StyledTableCell  align="right">{statementSummary.cash_paid}</StyledTableCell>
</StyledTableRow>     


<StyledTableRow style={{height: 5}}>
<StyledTableCell  align="right">₹ Cash Balance</StyledTableCell>
<StyledTableCell  align="right">{statementSummary.cash_balance}</StyledTableCell>
</StyledTableRow>     


<StyledTableRow style={{height: 5}}>
<StyledTableCell  align="right">Expenditure Comments</StyledTableCell>
<StyledTableCell  align="right">{statementSummary.exp_comments}</StyledTableCell>
</StyledTableRow>     

<StyledTableRow style={{height: 5}}>
<StyledTableCell  align="right">Statement Status</StyledTableCell>
<StyledTableCell  align="right">{statementSummary.status}</StyledTableCell>
</StyledTableRow>  

</TableBody>
                </Table>
       </TableContainer>
  

</Paper>
</main>
    </div>
    ):<div> Loading... </div>
    )
});
