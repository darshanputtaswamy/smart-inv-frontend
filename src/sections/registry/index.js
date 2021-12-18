import React, { useState, useEffect,useRef } from 'react'
import MaterialTable,{ MTableToolbar,MTableActions } from "@material-table/core";
import { Grid, Button , Paper, Card, CardHeader, CardContent, TableBody, Table,TableRow , TableCell} from '@mui/material'; 
import {  
getStatementRegistory,
addRowInStatementRegistory,
} from 'redux/actions/StatementActions'
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router'; 
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';

const columns = [
  { field: 'sid', title: 'ID', flex: 0.5, },
  { field: 'previous_sid', title: 'Previous Statement', flex: 0.5,},
  { field: 'status', title: 'Status', flex: 1, },
  { field: 'fdate', title: 'From Date',flex: 1,  type: 'date',
  dateSetting: {
    format: 'dd/MON/yyyy'
  }, },
  { field: 'tdate', title: 'Till Date',flex: 1,  type: 'date',
  dateSetting: {
    format: 'dd/MON/yyyy'
  }, },
  { field: 'auto_total', title: 'Auto Total',flex: 1, },
  { field: 'actual_total', title: 'Actual Total',flex: 1, },
  { field: 'exp_total', title: 'Expenditure',flex: 1, },
  { field: 'cash_paid', title: 'Cash Paid',flex: 1, },
  { field: 'card_paid', title: 'Card Paid',flex: 1,},
  { field: 'cash_balance', title: 'Cash Balance',flex: 1, },
  { field: 'exp_comments', title: 'Comments',flex: 1, hidden:true},
  { field: 'created_at', title: 'Created',flex: 1,   type: 'date',},
  { field: 'updated_at', title: 'last Updated',flex: 1,  type: 'date', },
 
];

 
export default function Statement() {
  const { registory = [] } = useSelector((state) => state.store)
  const dispatch = useDispatch();
  const router = useRouter();
  const { store } = router.query; 

  useEffect(() => {
    dispatch(getStatementRegistory(store)) 
}, [dispatch])


useEffect(() => {
  console.log(registory)
}, [registory])


  return (

<Grid container spacing={2} style={{ marginTop:'2px'}} >

  <Grid item xs={12}>
  <div style={{ height: '70Vh', width: '100%' }}>
      <MaterialTable
        title="Statement Registory"
        data={registory}
       
        actions={[
          {
            icon: "keyboard_left",
            tooltip: 'Load Statement',
            onClick: (event, rowData) => router.push(`/main/${store}/statements/${rowData.sid}`)
          },
          {
          icon: "add_box",
          tooltip: "Add New Statement",
          position: "toolbar",
        }
        ]}
        components={{
          Container: (props) => <Paper {...props} />,
        }}
        columns={columns}
        options={{
          exportButton: true
        }}
       />
    </div>
  </Grid>
</Grid>
    
  );
}