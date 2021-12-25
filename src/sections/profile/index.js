
import React, { useState, useEffect } from 'react'
import { Grid, Dialog,DialogTitle,DialogContent,DialogContentText, DialogActions, Button , Stack, Typography, 
    Card,
    Divider,
    Icon,
    Table,
    TextField ,
    TableHead,
    TableBody,
    TableCell,
    TableRow,
    CardHeader,
    CardContent,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import {
  getUserProfile,
  updateUserProfile,
  updateUserPassword
} from 'redux/actions/UserProfileActions'
 
import { toast } from 'react-toastify';


const Profile = () => {
    const { profile = {}, stores = [] } = useSelector((state) => state.user)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserProfile()) 
    }, [dispatch])

    useEffect(() => {
        setFormNameState(profile.name)
        setFormEmailState(profile.email)
        setFormPhoneState(profile.phone)

    }, [profile])


     const [ open, setOpen] = useState(false);
     const [ open2, setOpen2] = useState(false);

    const [ formNameState, setFormNameState ] = useState('');
    const [ formEmailState, setFormEmailState ] = useState('');
    const [ formPhoneState, setFormPhoneState ] = useState('');
    const [ formOldPasswordState, setFormOldPasswordState ] = useState('');
    const [ formNewPasswordState, setFormNewPasswordState ] = useState('');
    const [ formNewPasswordConfirmationState, setFormNewPasswordConfirmationState ] = useState('');


    const handleClickPasswordChangeOpen = () => {
        setOpen2(true);
      };
    
      const handleClickPasswordChangeClose = () => {
        setOpen2(false);
      };

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleSubmit= () =>{

        dispatch(updateUserProfile({
           "username": formNameState,
           "email":formEmailState,
           "phone":formPhoneState
          })).then(function(e){
            console.log(e)
            setOpen(false);
          }).catch(function(e){
            console.log(e);
            console.log("something went wrong");
          }).finally(function(e){
            console.log("closed");
          })

    }

    const handlePasswordChange = () =>{

      if(!formOldPasswordState || !formNewPasswordState || !formNewPasswordConfirmationState){
        toast.error("fields cannot be blank");
        return 
      }


      if(formNewPasswordState != formNewPasswordConfirmationState){
        toast.error("New Passwords do not match");
        return 

      }

      if(formNewPasswordState.length< 2 ){
          toast.error("passwords is too short");
          return 
      }


      dispatch(updateUserPassword({
        "old_password": formOldPasswordState,
        "password":formNewPasswordState,
       }))
       .then(function(e){
          console.log('executed anyway')
          setOpen2(false);
      }).catch(function(e){
          console.log(e);
          console.log("something went wrong");
      }).finally(function(e){
          console.log("closed");
      })

    }


    return (
        <>
        <Grid container spacing={1}>
        <Grid  item xs={12} >
        <Stack spacing={2} direction="row" justifyContent="end">
        <Button raised="true"  variant="contained"  color="primary" onClick={handleClickPasswordChangeOpen} >
            Change Password
        </Button>

        <Button raised="true"  variant="contained"  color="primary" onClick={handleClickOpen} >
            Edit Profile
        </Button>
      </Stack>
        </Grid>

        <Grid  item xs={12} lg={12}>
        <Card  elevation={3}>
              <CardHeader title={'Profile Details'} />
                  <CardContent>
                  <Table>
                      <TableBody>
                        
                      <TableRow>
                          <TableCell>
                          User ID
                          </TableCell>
                          <TableCell>
                          {profile['id']}
                          </TableCell>
                          </TableRow>

                          <TableRow>
                          <TableCell>
                          User Name
                          </TableCell>
                          <TableCell>
                          {profile['name']}
                          </TableCell>
                          </TableRow>


                          <TableRow>
                          <TableCell>
                         Email
                          </TableCell>
                          <TableCell>
                          {profile['email']}
                          </TableCell>
                          </TableRow>

                          <TableRow>
                          <TableCell>
                         Phone
                          </TableCell>
                          <TableCell>
                          {profile['phone']}
                          </TableCell>
                          </TableRow>

                          <TableRow>
                          <TableCell>
                            Role
                          </TableCell>
                          <TableCell>
                          { profile['role']}
                          </TableCell>
                          </TableRow>
                      </TableBody>
                  </Table>
                  </CardContent>
              </Card>
        </Grid>
        <Grid  item xs={12} lg={12}>

        <Card  elevation={3}>
              <CardHeader title={'Owned Stores'} />
                  <CardContent>
                  <Table>
                  <TableHead>
                    <TableRow>
                        <TableCell>Store ID</TableCell>
                        <TableCell>Store Type</TableCell>
                        <TableCell>Store Name</TableCell>
                        <TableCell>Store Address</TableCell>
                    </TableRow>
                    </TableHead>
                      <TableBody>                      
                  {stores.map((store,index) => (
                      <TableRow>  
                                    <TableCell>
                                    {store['bid']}
                                    </TableCell>
                                    <TableCell>
                                    {store['btype']}
                                    </TableCell>
                                    <TableCell>
                                    {store['bname']}
                                    </TableCell>
                                    <TableCell>
                                    {store['address'] + ' ' + store['postal_code']  } 
                                    </TableCell>
                        </TableRow>
                        ))
                    } 
                      </TableBody>
                  </Table>
                  </CardContent>
              </Card>

        </Grid>
        </Grid>
        <Dialog  fullWidth={true}
         maxWidth={'md'} open={open2} onClose={handleClickPasswordChangeClose}>
        <DialogTitle>Change Password</DialogTitle>
        <DialogContent>
        <Stack spacing={3}>
        <TextField
                id="Old Password"
                sx={{ marginTop:'5px'}}
                label="Old Password"
                required
                type="password" 
                value={formOldPasswordState}
                fullWidth
                onChange={(event)=>{
                  setFormOldPasswordState(event.target.value)
                }}
            >
        </TextField>
        <TextField
                id="New Password"
                sx={{ marginTop:'5px'}}
                label="New Password"
                required
                type="password" 
                value={formNewPasswordState}
                fullWidth
                onChange={(event)=>{
                  setFormNewPasswordState(event.target.value)
                }}
            >
        </TextField>
        <TextField
                id="Confirm New Password"
                sx={{ marginTop:'5px'}}
                label="Confirm New Password"
                required
                type="password" 
                value={formNewPasswordConfirmationState}
                fullWidth
                onChange={(event)=>{
                  setFormNewPasswordConfirmationState(event.target.value)
                }}
            >
        </TextField>
          </Stack>
 
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClickPasswordChangeClose} sx={{float:'left'}} >Cancel</Button>
          <Button onClick={handlePasswordChange} variant="contained">Update</Button>
        </DialogActions>
        </Dialog>

        <Dialog  fullWidth={true}
         maxWidth={'md'} open={open} onClose={handleClose}>
        <DialogTitle>Edit Details</DialogTitle>
        <DialogContent>
        <Stack spacing={3}>
        <TextField
                id="name"
                sx={{ marginTop:'5px'}}
                label="Username"
                required
                value={formNameState}
                fullWidth
                onChange={(event)=>{
                    setFormNameState(event.target.value)
                }}
            >
        </TextField>
        <TextField
                id="email"
                sx={{ marginTop:'5px'}}
                label="Email"
                required
                value={formEmailState}
                fullWidth
                onChange={(event)=>{
                    setFormEmailState(event.target.value)
                }}
            >
        </TextField>
          </Stack>
 
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{float:'left'}} >Cancel</Button>
          <Button onClick={handleSubmit} variant="contained">Update</Button>
        </DialogActions>
      </Dialog>
</>
      
    )
}

export default Profile
