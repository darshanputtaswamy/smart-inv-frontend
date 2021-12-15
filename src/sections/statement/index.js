import React, { useState, useEffect,useRef } from 'react'
import MaterialTable from "@material-table/core";
import Grid from '@mui/material/Grid'; 
import {
  
getStatementRegistory,
addRowInStatementRegistory,
updateRowInStatementRegistory,
deleteRowInStatementRegistory

} from 'redux/actions/StatementActions'
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router'; 


const columns = [
  { field: 'sid', title: 'ID', flex: 0.5,},
  { field: 'previous_sid', title: 'Previous Statement', flex: 0.5,},
  { field: 'status', title: 'Status', flex: 1, },
  { field: 'fdate', title: 'From Date',flex: 1,  },
  { field: 'tdate', title: 'Till Date',flex: 1,  },
  { field: 'auto_total', title: 'Auto Total',flex: 1,  },
  { field: 'actual_total', title: 'Actual Total',flex: 1,  },
  { field: 'exp_total', title: 'Expenditure',flex: 1,  },
  { field: 'cash_paid', title: 'Cash Paid',flex: 1,  },
  { field: 'card_paid', title: 'Card Paid',flex: 1,  },
  { field: 'cash_balance', title: 'Cash Balance',flex: 1,  },
  { field: 'exp_comments', title: 'Comments',flex: 1,  },
  { field: 'created_at', title: 'Created',flex: 1,  },
  { field: 'updated_at', title: 'last Updated',flex: 1,  },
 
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