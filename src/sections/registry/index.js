import React, { useState, useEffect,useRef } from 'react'
import MaterialTable,{ MTableToolbar,MTableActions } from "@material-table/core";
import { Grid, Button , Paper,} from '@mui/material'; 
import {  
getStatementRegistory,
addRowInStatementRegistory,
} from 'redux/actions/StatementActions'
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router'; 
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

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
  const [newfDate, setNewfDate] = useState(new Date());
  const [newtDate, setNewtDate] = useState(new Date());
  const [newPreStatementID, setNewPreStatementID] = useState(null);

 

  const dispatch = useDispatch();
  const router = useRouter();
  const { store } = router.query; 
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () =>{
    dispatch(addRowInStatementRegistory(store, {
      "previous_sid": newPreStatementID,
     "fdate":newfDate,
     "tdate":newtDate
    })).then(function(e){
      console.log(e)
      setOpen(false);
    }).catch(function(e){
      console.log(e);
      console.log("something went wrong");
    }).finally(function(e){
      console.log("cloed");
    })
  }

  useEffect(() => {
    dispatch(getStatementRegistory(store)) 
}, [dispatch])

 

  return (
<>
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
          onClick: handleClickOpen
        }
        ]}
        components={{
          Container: (props) => <Paper {...props} />,
        }}
        columns={columns}
        options={{
          exportButton: true,
        }}
       />
    </div>
  </Grid>
</Grid>
<Dialog  fullWidth={true}
         maxWidth={'md'} open={open} onClose={handleClose}>
        <DialogTitle>Create New Statement</DialogTitle>
        <DialogContent>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Stack spacing={3}>
        <TextField
                                id="Previous Statement"
                                select
                                sx={{ marginTop:'5px'}}
                                label="Previous Statement"
                                required
                                value={newPreStatementID}
                                fullWidth
                                onChange={(event)=>{
                                  console.log(event)
                                  setNewPreStatementID(event.target.value)
                                }}
                            >
                              {
                                  registory.map(function(e){

                                    return (
                                      <MenuItem value={e.sid}>
                                          {e.sid} - [ {e.fdate } - {e.tdate}] [{e.status}]
                                      </MenuItem>
                                    )
                                  })

                              } 
                            </TextField>
        <MobileDatePicker
          label="New Statement - From Date"
          inputFormat="MM/dd/yyyy"
          value={newfDate}
          onChange={(value)=>{setNewfDate(value)}}
          renderInput={(params) => <TextField {...params} />}
        />
        <MobileDatePicker
          label="New Statement - To Date"
          inputFormat="MM/dd/yyyy"
          value={newtDate}
          onChange={(value)=>{setNewtDate(value)}}
          renderInput={(params) => <TextField {...params} />}
        />
          </Stack>
    </LocalizationProvider>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{float:'left'}} >Cancel</Button>
          <Button onClick={handleSubmit} variant="contained">Create</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}