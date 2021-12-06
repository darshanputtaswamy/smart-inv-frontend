
import React, { useState, useEffect } from 'react'
import {storeList} from './store.data';
import { Grid, Dialog,DialogTitle,DialogContent,DialogContentText, DialogActions, Button } from '@mui/material';
import clsx from 'clsx'
import { makeStyles } from "@mui/styles";
import { padding } from 'polished';
import Store from './Store';
import CreateFormStepper from './createForm';

const StoreCard = () => {
    const [uid, setUid] = useState(null)
    const [rowsPerPage, setRowsPerPage] = useState(10)
    const [page, setPage] = useState(0)
    const [stores, setstores] = useState(null)
    const [storesList, setStoresList] = useState([])

    
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };


    const handleDialogClose = () => {
        setShouldOpenEditorDialog(false)
        updatePageData()
    }

    const handleDeleteUser = (user) => {
        setUser(user)
        setShouldOpenConfirmationDialog(true)
    }

    const updatePageData = () => {
        setStoresList(storeList)
    }

    useEffect(() => {
        updatePageData()
    }, [])

    return (
        <>
        <Grid container spacing={2}>
        {storesList.map((store,index) => (
                <Store store={store} />
        ))
        }
            <Grid item xs={12} lg={3} >
                <Button raised  variant="contained"  color="primary" onClick={handleClickOpen} >
                    New Store
                </Button>
            </Grid>
        </Grid>
         <Dialog 
         fullWidth={true}
         maxWidth={'xl'}
         open={open} 
         onClose={handleClose}>
         <DialogTitle>Add New Store</DialogTitle>
         <DialogContent>
           <CreateFormStepper />
         </DialogContent>
         <DialogActions>
           <Button onClick={handleClose}>Cancel</Button>
           <Button onClick={handleClose}>Subscribe</Button>
         </DialogActions>
       </Dialog>
</>
      
    )
}

export default StoreCard
