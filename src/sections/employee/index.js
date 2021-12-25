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

  { field: 'id', title: 'ID', hidden:true },
  { field: 'bid', title: 'Store ', flex: 0.5, },
  { field: 'uid', title: 'User', flex: 0.5,},
  { field: 'role', title: 'Role', flex: 0.5,}
 
];

 
export default function Employee() {
  const { registory = [] } = useSelector((state) => state.store)
  const [newfDate, setNewfDate] = useState(new Date());
  const [newtDate, setNewtDate] = useState(new Date());
  const [newPreStatementID, setNewPreStatementID] = useState(null);

 

  const dispatch = useDispatch();
  const router = useRouter();
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
 

  return (
<>
<Grid container spacing={2} style={{ marginTop:'2px'}} >

  <Grid item xs={12}>
  <div style={{ height: '70Vh', width: '100%' }}>
      <MaterialTable
        title="Manage Employee"
        data={[]}
       
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
        <DialogTitle>Manage Employee</DialogTitle>
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
          label="Manage Employee"
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