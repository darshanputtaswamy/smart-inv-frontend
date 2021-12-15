import * as React from 'react';
import MaterialTable from "@material-table/core";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Typography  from '@mui/material/Typography';

const options = ['Add New Statement'];

const columns = [
  { field: 'id', headerName: 'ID', flex: 0.5,},
  { field: 'previous_sid', headerName: 'Previous Statement', flex: 0.5,},
  { field: 'status', headerName: 'Status', flex: 1, },
  { field: 'fdate', headerName: 'From Date',flex: 1,  },
  { field: 'tdate', headerName: 'Till Date',flex: 1,  },
  { field: 'auto_total', headerName: 'Auto Total',flex: 1,  },
  { field: 'actual_total', headerName: 'Actual Total',flex: 1,  },
  { field: 'exp_total', headerName: 'Expenditure',flex: 1,  },
  { field: 'cash_paid', headerName: 'Cash Paid',flex: 1,  },
  { field: 'card_paid', headerName: 'Card Paid',flex: 1,  },
  { field: 'cash_balance', headerName: 'Cash Balance',flex: 1,  },
  { field: 'exp_comments', headerName: 'Comments',flex: 1,  },
  { field: 'created_at', headerName: 'Created',flex: 1,  },
  { field: 'updated_at', headerName: 'last Updated',flex: 1,  },
 
];

const rows = [
    {
        "id": 1,
        "bid": 14,
        "previous_sid": null,
        "status": "New",
        "fdate": "2021-11-10T00:00:00.000Z",
        "tdate": "2021-11-16T00:00:00.000Z",
        "auto_total": "0",
        "actual_total": "0",
        "exp_total": "0",
        "cash_paid": "0",
        "card_paid": "0",
        "cash_balance": "0",
        "exp_comments": null,
        "created_at": "2021-12-13T12:12:45.315Z",
        "updated_at": "2021-12-13T12:12:45.316Z"
    }
]

export default function Statement() {
    

  return (

<Grid container spacing={2} style={{ marginTop:'2px'}} >

  <Grid item xs={12} >
      <Paper style={{ display:'flex', direction:'column'}}> 
      <Grid container justifyContent="flex-start">
            <Typography variant="h4" component="h5" style={{padding:'2px'}}>
                Statement Registory
            </Typography>
       </Grid>
      <Grid container justifyContent="flex-end">
        <Button
          size="small"
          variant="contained"
          onClick={(e)=>{ console.log(e)}}
        >
            Add New Statement
        </Button>
       </Grid>
      </Paper>
  </Grid>
  <Grid item xs={12}>
  <div style={{ height: '70Vh', width: '100%' }}>
      <MaterialTable
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  </Grid>
</Grid>
    
  );
}