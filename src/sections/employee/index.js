import React, { useState, useEffect,useRef } from 'react'
import MaterialTable,{ MTableToolbar,MTableActions } from "@material-table/core";
import { Grid, Button , Paper,} from '@mui/material'; 
import {  
getLobUserList,
createLobUser,
updateLobUser,
deleteLobUser
} from 'redux/actions/LobActions'
import AsynchronousSearchAppUser from './search';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import {
  getUserProfile 
} from 'redux/actions/UserProfileActions'
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
import AddBoxSharpIcon from '@mui/icons-material/AddBoxSharp';

 

const columns = [

  { field: 'id', title: 'ID', hidden:true },
  { field: 'bid', title: 'Store ', editable: 'never', flex: 0.5, render: rowData => `${rowData.bname} - [${rowData.address} - ${rowData.postal_code} ]` },
  { field: 'uid', title: 'User', editable: 'never', flex: 0.5, render: rowData => `${rowData.phone} - [${rowData.username}]`},
  { field: 'role', title: 'Role', flex: 0.5,  

  editComponent: props => (
          <TextField
        id="role"
        select
        sx={{ marginTop:'5px'}}
        label="Role"
        required
        value={props.value}
        onChange={e => {
          var data = { ...props.rowData };
          data.role = e.target.value
          props.onRowDataChange(data);
      }}
        fullWidth
        disabled={props.value == 'owner'}
      >
              <MenuItem value={'admin'}>Admin</MenuItem>
              <MenuItem value={'user'}>User</MenuItem>   
              {props.value == 'owner' &&
              <MenuItem value={'owner'}>Owner</MenuItem>          
              }
      </TextField>
)
 

}
 
];

 
export default function Employee() {
  const { lobUserList = [] } = useSelector((state) => state.lob)
  const [newfbid, setNewfbid] = useState('');
  const [newfuid, setNewfuid] = useState('');
  const [newfrole, setNewfrole] = useState('user');
  const { stores = [] } = useSelector((state) => state.user)
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getUserProfile()) 
  }, [ dispatch])

  useEffect(() => {
    dispatch(getLobUserList()) 
}, [ dispatch])


  const theme = useTheme();
  const shouldShowTitle = useMediaQuery(theme.breakpoints.up('sm'));
 
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () =>{
    dispatch(createLobUser({
     "bid": newfbid,
     "uid":newfuid,
     "role":newfrole
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
        title={shouldShowTitle?"Employee":""}
        data={lobUserList}
        icons={{
          Add: () => <AddBoxSharpIcon style={{ color: "#2a0a4e" }} />,
        }}
        actions={[
          {
          icon: "add_box",
          tooltip: "Add New Employee",
          position: "toolbar",
          onClick: handleClickOpen
        }
        ]}
        editable={{
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              dispatch(updateLobUser(newData,oldData))
              resolve();
            }),
          onRowDelete: oldData =>
            new Promise((resolve, reject) => {
              dispatch(deleteLobUser(oldData))
              resolve();
            }),
        }}
        components={{
          Container: (props) => <Paper {...props} />,
        }}
        columns={columns}
        options={{
          defaultExpanded: true,
           headerStyle: {
            lineHeight: '2.5rem',
            backgroundColor: '#2a0a4e',
            color: '#FFF',
          },
          rowStyle: {
            fontFamily: '"Roboto","Helvetica","Arial","sans-serif"'
          },
          searchFieldStyle: {
            width: '100%',
            padding: '0px',
            margin: '0px'
        },
        actionsCellStyle:{
          backgroundColor: '#757cc9',
          width:'7%'
        },
        }}
       />
    </div>
  </Grid>
</Grid>
<Dialog  fullWidth={true}
         maxWidth={'md'} open={open} onClose={handleClose}>
        <DialogTitle>Add Employee</DialogTitle>
        <DialogContent>
        <Stack spacing={3}>
        <TextField
              id="bid"
              select
              sx={{ marginTop:'5px'}}
              label="Store Name"
              required
              value={newfbid}
              fullWidth
              onChange={(event)=>{
                setNewfbid(event.target.value)
              }}
          >
            {
                stores.map(function(rowData){
                  return (
                    <MenuItem value={rowData.bid}>
                        {rowData.bname} - [{rowData.address} - {rowData.postal_code}] 
                    </MenuItem>
                  )
                })

            } 
          </TextField>

           <AsynchronousSearchAppUser   setNewfuid={setNewfuid} />

          <TextField
              id="role"
              select
              sx={{ marginTop:'5px'}}
              label="Role"
              required
              value={newfrole}
              fullWidth
              onChange={(event)=>{
                setNewfrole(event.target.value)
              }}
          >
                     <MenuItem value={'admin'}>Admin</MenuItem>
                     <MenuItem value={'user'}>User</MenuItem>          
          </TextField>

          </Stack>
 
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{float:'left'}} >Cancel</Button>
          <Button onClick={handleSubmit} variant="contained">Create</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}