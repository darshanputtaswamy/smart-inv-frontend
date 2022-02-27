
import React, { useState, useEffect } from 'react'
import { Grid, Dialog,DialogTitle,DialogContent,DialogContentText, DialogActions, Button , Stack} from '@mui/material';
import Store from './MainStore';
import CreateFormStepper from './CreateFormStepper';
import { useDispatch, useSelector } from 'react-redux';
import {
  getLobList,
  getPlanList

} from 'redux/actions/LobActions'
import {razorPay} from './util';


const StoreCard = () => {
    const { lobList = [], planList = [] } = useSelector((state) => state.lob)
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getPlanList()) 
        dispatch(getLobList()) 
    }, [dispatch])

     const [ plan, setPlan ] = useState(4);
     const [uid, setUid] = useState(null)
     const [rowsPerPage, setRowsPerPage] = useState(10)
     const [page, setPage] = useState(0)
     const [activeStep, setActiveStep] = useState(0);
     const [ formState, setFormState ] = useState({
      name:'',
      type:'Bar',
      address:'',
      pincode:'',
      owner:'',
      gst_number:'',
    });

    
    const handleNext = (e) => {
      if(e.target.id === 'checkout'){
 
        razorPay({
          "bname": formState.name,
          "btype": formState.type,
          "address": formState.address,
          "postal_code": parseInt(formState.pincode),
          "gst_number": formState.gst_number,
          "plan_id":plan,
          "amount":10000,
      }).then(function(e){
          setActiveStep((prevActiveStep) => prevActiveStep + 1);  
        }).catch(function(e){
          setActiveStep((prevActiveStep) => prevActiveStep + 1);  
        })
      }else if(e.target.id === 'finish'){
        setActiveStep((prevActiveStep) => prevActiveStep-prevActiveStep);
        setOpen(false);
          dispatch(getLobList()) 
      }else{
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      }
    };
    
    const handleBack = (e) => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    
    const [open, setOpen] = useState(false);

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



    return (
        <>
        <Grid container spacing={1}>
        <Grid  item xs={12} >
        <Stack direction="row" justifyContent="end">
        <Button raised="true"  variant="contained"  color="primary" onClick={handleClickOpen} >
            New Store
        </Button>
      </Stack>
        </Grid>
         <Grid  item xs={12} lg={12}>
         <Grid container spacing={1}>
        {lobList.map((store,index) => (
              <Grid  key={index} item xs={12} lg={3}>
                <Store store={store} />
              </Grid>
        ))

        } 
                </Grid>

        </Grid>
        </Grid>
         <Dialog 
         fullWidth={true}
         maxWidth={'xl'}
         open={open} 
         onClose={handleClose}>
         <DialogTitle>Add New Store</DialogTitle>
         <DialogContent>
           <CreateFormStepper activeStep={activeStep} planList={planList} plan={plan} setPlan={setPlan} formState={formState} setFormState={setFormState} />
         </DialogContent>
         <DialogActions>
           {activeStep == 0 ? (<Button id="cancel" onClick={handleClose}>Cancel</Button>): (<Button id="back" onClick={handleBack} >Back</Button>) }
           {activeStep < 2 ? (<Button id="next" variant="contained"  color="primary"  onClick={handleNext}>Next</Button>): activeStep == 2 ? (<Button variant="contained" id="checkout" color="primary" onClick={handleNext}  >Checkout</Button>): (<Button variant="contained"  id="finish"   color="primary" onClick={handleNext}  >Finish</Button>) }
         </DialogActions>
       </Dialog>
</>
      
    )
}

export default StoreCard
