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
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#2a0a4e',
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
      </header>

      <main >

              <TableContainer component={Paper}>
              <Table aria-label="simple table">
                  <TableHead>
                  <TableRow>
                        <StyledTableCell component="th" scope="row" align="right">Type</StyledTableCell>
                        <StyledTableCell component="th" scope="row" align="right">Name</StyledTableCell>
                        <StyledTableCell component="th" scope="row" align="right">Quantity</StyledTableCell>
                        <StyledTableCell component="th" scope="row" align="right">Open</StyledTableCell>
                        <StyledTableCell component="th" scope="row" align="right">Received</StyledTableCell>
                        <StyledTableCell component="th" scope="row" align="right">Total</StyledTableCell>
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
                        <StyledTableCell align="right">{parseInt(item.received)+parseInt(item.open)}</StyledTableCell>
                        <StyledTableCell align="right">{item.closed}</StyledTableCell>

                        <StyledTableCell align="right">{item.sales}</StyledTableCell>

                        <StyledTableCell align="right">{item.cost}</StyledTableCell>
                        <StyledTableCell align="right">{parseFloat(item.auto_total).toFixed(2) }</StyledTableCell>
                        <StyledTableCell align="right">{parseFloat(item.actual_total).toFixed(2) }</StyledTableCell>
                        </StyledTableRow>
                </>

            )
          })}
  
                             </TableBody>
                </Table>
       </TableContainer>
<Paper  elevation={2} sx={{ marginTop:'3rem'}} >
  <Grid container spacing={4} >
    <Grid item xs={12} xm={12} md={12} lg={12} >
    <Typography variant="h6" component="div">
        Statement Summary
    </Typography>
                
        </Grid>
      
        <Grid item xs={6} xm={6} md={6} lg={6} >
            <TextField
                id="actual_total"
                label="₹ Actual Total"
                value={parseFloat(statementSummary.actual_total).toFixed(2)}
                fullWidth
                InputLabelProps={{
                  style: { color: '#000' },
                }}
            />
        </Grid>
        <Grid item xs={6} xm={6} md={6}  lg={6}>
            <TextField
                id="auto_total"
                label="₹ Auto Total"
                value={parseFloat(statementSummary.auto_total).toFixed(2) }
                fullWidth
                InputLabelProps={{
                  style: { color: '#000' },
                }}
            />

        </Grid>
        <Grid item xs={6} xm={6} md={6}  lg={6}>
            <TextField
                id="exp_total"
                label="₹ Expenditure"
                value={statementSummary.exp_total}
                fullWidth
                InputLabelProps={{
                  style: { color: '#000' },
                }}
            />

        </Grid>
        <Grid item xs={6} xm={6} md={6}  lg={6}>
            <TextField
                id="cash_paid"
                label="₹ Cash Paid"
                value={statementSummary.cash_paid}
                fullWidth
                InputLabelProps={{
                  style: { color: '#000' },
                }}
            />

        </Grid>
        <Grid item xs={6} xm={6} md={6}  lg={6}>
            <TextField
                id="card_paid"
                label="₹ Card Paid"
                value={statementSummary.card_paid}
                fullWidth
                InputLabelProps={{
                  style: { color: '#000' },
                }}
            />

        </Grid>
        <Grid item xs={6} xm={6} md={6}  lg={6}>
            <TextField
                id="cash_balance"
                label="₹ Cash Balance"
                value={statementSummary.cash_balance}
                fullWidth
                InputLabelProps={{
                  style: { color: '#000' },
                }}
            />

        </Grid>
        <Grid item xs={12} xm={6} md={6}  lg={6}>
            <TextField
                multiline
                minRows={5}
                id="exp_comments"
                label="Comments"
                placeholder="Expenditure Comments"
                value={statementSummary.exp_comments}
                fullWidth
                InputLabelProps={{
                  style: { color: '#000' },
                }}
            />

        </Grid>
        <Grid item xs={6} xm={6} md={6} lg={6}>
            <TextField
                id="status"
                label="Statement Status"
                required
                value={statementSummary.status}
                fullWidth
                InputLabelProps={{
                  style: { color: '#000' },
                }}
            > 
            </TextField>
        </Grid>

    </Grid>

</Paper>
</main>
    </div>
    ):<div> Loading... </div>
    )
});