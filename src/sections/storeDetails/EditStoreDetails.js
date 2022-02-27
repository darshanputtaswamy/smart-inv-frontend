import React, {useState,useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import StoreDetailsEF from '../main/StoreDetailsEF';
import { useConfirm } from "material-ui-confirm";

import { 
    updateLobDetails,
    deleteLob,
    getLobList
    
  } from 'redux/actions/LobActions'

  import { useDispatch, useSelector } from 'react-redux';
  import { useRouter } from 'next/router'; 

export default function FormDialog({storeObj}) {


const dispatch = useDispatch();
const router = useRouter();
const { store } = router.query; 
const confirm = useConfirm();

const [open, setOpen] = useState(false);

  const [ formState, setFormState ] = useState({
    name:'',
    type:'Bar',
    address:'',
    pincode:'',
    owner:'',
    gst_number:'',
  });

useEffect(() => {
        setFormState({
            name:storeObj.bname,
            type:storeObj.btype,
            address:storeObj.address,
            pincode:storeObj.postal_code,
            gst_number:storeObj.gst_number,
        })
    }, [storeObj])


    const handleClickOpen = () => {
    setOpen(true);
    };

    const handleClose = () => {
    setOpen(false);
    };

    const handleUpdate =() =>{
        dispatch(updateLobDetails(store,{
            bname:formState.name,
            btype:formState.type,
            address:formState.address,
            postal_code:formState.pincode,
            gst_number:formState.gst_number,
        }));
        setOpen(false);
    }

 
    const handleDelete = item => {
      confirm({ description: `This will permanently delete store and all details.` })
        .then(() => { console.log("should delete"); 
          dispatch(deleteLob(store)).then((e)=> {
            console.log("deleted") 
            router.push('/main')
        })  })
        .catch(() => console.log("Deletion cancelled."));
    };



  return (
    <div>
 
      <Button variant="outlined" onClick={handleDelete}>
        Delete Store
      </Button>
      <Button variant="outlined" onClick={handleClickOpen}>
        Edit Store Details
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Store Details</DialogTitle>
        <DialogContent>
            <StoreDetailsEF formState={formState} setFormState={setFormState}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button  variant="outlined" onClick={handleUpdate}>Update</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}