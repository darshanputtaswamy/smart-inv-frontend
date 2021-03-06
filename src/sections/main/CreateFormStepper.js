import React, { useState, useEffect } from 'react';
import { makeStyles, Theme, createStyles } 
        from '@mui/styles';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import baby from 'assets/images/baby.svg';
import upgrade from 'assets/images/upgrade.svg';
import business_deal from 'assets/images/business_deal.svg';
import Pricing from './Pricing';
import StoreDetailsEF from './StoreDetailsEF';
import CheckOut from './Checkout';



const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    button: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    actionsContainer: {
      marginBottom: theme.spacing(2),
      alignContent:'center'
    },
    resetContainer: {
      padding: theme.spacing(3),
    },
    stepperbody:{
      minWidth: '60%'
    }
      
  }),
);
  
  
export default function CreateFormStepper({activeStep, planList,plan,setPlan,formState,setFormState }) {
  const classes = useStyles();

  function getSteps() {
    return [<b style={{color:'purple'}}>Pick Your Plan</b>, 
    <b style={{color:'purple'}}>Enter Store Details</b>, 
    <b style={{color:'purple'}}>Checkout Summary</b>,
    <b style={{color:'purple'}}>Payment</b>];
  }
  const steps = getSteps(); 
  
  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <Pricing planList={planList} plan={plan} setPlan={setPlan} />
        );
      case 1:
        return (
          <StoreDetailsEF formState={formState} setFormState={setFormState} />
        );
      case 2:
        return (
         <CheckOut  formState={formState}  selectedPlan={planList.filter((i)=>{ return i.plan_id == plan})[0]}   />
        );
      default:
        return 'Unknown step';
    }
  }
 
  
  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="horizontal">
        {steps.map((label, index) => (
          <Step key={label+index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
     <div className={classes.stepperbody}>
              <Typography>{getStepContent(activeStep)}</Typography>
            
        </div>
    </div>
  );
}