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
 
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));




export const  Statement = React.forwardRef((props, ref) => {
    const { statement = []  } = useSelector((state) => state.store)
    const { lobDetails,statementSummary  } = props
    const dispatch = useDispatch();
    const router = useRouter();
    const { store, id } = router.query;
    useEffect(() => {
        dispatch(getStatement(store, id))
    }, [dispatch])

    useEffect(() => {
        console.log(statement)
        console.log(lobDetails)
        console.log(statementSummary)

    }, [statement])
    
return  (


    statementSummary  ? (
    <div  ref={ref}>
    
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
            <Typography variant="h5" component="h5">
            <b>{lobDetails.bname}</b>
        </Typography> 
        <Typography variant="h6" component="p">
            {lobDetails.address} - {lobDetails.postal_code}
        </Typography> 
        </div>
        <div>
        <div sx={{textAlign:'end'}}>
        <Typography variant="h6" component="p">
           From Date: { (new Date(statementSummary.fdate)).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
        </Typography> 
        <Typography variant="h6" component="p">
           To Date: { (new Date(statementSummary.tdate)).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
        </Typography> 
        </div>

        </div>
      </Box>


     

              <TableContainer component={Paper}>
              <Table aria-label="simple table">
                  <TableHead>
                  <TableRow>
                        <StyledTableCell component="th" scope="row" align="right">Type</StyledTableCell>
                        <StyledTableCell component="th" scope="row" align="right">Name</StyledTableCell>
                        <StyledTableCell component="th" scope="row" align="right">Quantity</StyledTableCell>
                        <StyledTableCell component="th" scope="row" align="right">Open</StyledTableCell>
                        <StyledTableCell component="th" scope="row" align="right">Received</StyledTableCell>
                        <StyledTableCell component="th" scope="row" align="right">Closed</StyledTableCell>
                        <StyledTableCell component="th" scope="row" align="right">Sales</StyledTableCell>
                        <StyledTableCell component="th" scope="row" align="right">Cost/Unit</StyledTableCell>
                        <StyledTableCell component="th" scope="row" align="right">Auto Total(₹)</StyledTableCell>
                        <StyledTableCell component="th" scope="row" align="right">Actual Total(₹)</StyledTableCell>
                   </TableRow>
                    </TableHead>
                  <TableBody>
          {statement.map(function(item){

            return (
            <>
                        <StyledTableRow >
                        <StyledTableCell align="right">{item.itype}</StyledTableCell>
                    
                        <StyledTableCell align="right">{item.name}</StyledTableCell>
                   
                        <StyledTableCell align="right">{item.quantity}</StyledTableCell>
                     
                        <StyledTableCell align="right">{item.open}</StyledTableCell>
                      
                        <StyledTableCell align="right">{item.received}</StyledTableCell>
                     
                        <StyledTableCell align="right">{item.closed}</StyledTableCell>

                        <StyledTableCell align="right">{item.sales}</StyledTableCell>

                        <StyledTableCell align="right">{item.cost}</StyledTableCell>
                        <StyledTableCell align="right">{item.auto_total}</StyledTableCell>
                        <StyledTableCell align="right">{item.actual_total}</StyledTableCell>
                        </StyledTableRow>
                </>

            )
          })}
  
                             </TableBody>
                </Table>
       </TableContainer>

       
       <TableContainer sx={{  width:'50%'}}>
       <Table>
       <TableBody>
       <TableRow>
                                 <TableCell colSpan={12} />
                                <TableCell align="right" colSpan={11}><b>Auto Total</b></TableCell>
                                <TableCell align="right"><b>₹ {statementSummary.auto_total} </b></TableCell>
                            </TableRow>

                    <TableRow>
                                <TableCell colSpan={12} />
                                <TableCell align="right" colSpan={11}><b>Actual Total</b></TableCell>
                                <TableCell align="right"><b>₹{statementSummary.actual_total}</b></TableCell>
                            </TableRow>
                        
                            <TableRow>
                            <TableCell colSpan={12} />
                                <TableCell align="right" colSpan={11}><b>Expenditure Total</b></TableCell>
                                <TableCell align="right"><b>₹{statementSummary.exp_total}</b></TableCell>
                            </TableRow>
                            <TableRow>
                            <TableCell colSpan={12} />
                                <TableCell align="right" colSpan={11}><b>Card Paid</b></TableCell>
                                <TableCell align="right"><b>₹{statementSummary.card_paid}</b></TableCell>
                            </TableRow>
                            <TableRow>
                            <TableCell colSpan={12} />
                                <TableCell align="right" colSpan={11}><b>Cash Paid</b></TableCell>
                                <TableCell align="right"><b>₹{statementSummary.cash_paid}</b></TableCell>
                            </TableRow>
                            <TableRow>
                            <TableCell colSpan={12} />
                                <TableCell align="right" colSpan={11}><b>Cash Balance</b></TableCell>
                                <TableCell align="right"><b>₹{statementSummary.cash_balance}</b></TableCell>
                            </TableRow>
                            <TableRow>
                            <TableCell colSpan={12} />
                                <TableCell align="right" colSpan={11}><b>Cash Balance</b></TableCell>
                                <TableCell align="right"><b>₹{statementSummary.cash_balance}</b></TableCell>
                            </TableRow>
                            <TableRow>
                            <TableCell colSpan={12} />
                                <TableCell align="right" colSpan={11}><b>Expenditure</b></TableCell>
                                <TableCell align="right"><b><pre>{statementSummary.exp_comments}</pre></b></TableCell>
                            </TableRow>
                            </TableBody>
            </Table>
       </TableContainer>
    </div>
    ):<div> Loading... </div>
    )
});