import React from 'react';
import { makeStyles, Theme, createStyles } 
        from '@mui/styles';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
  
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
    },
    resetContainer: {
      padding: theme.spacing(3),
    },
      
  }),
);
  
function getSteps() {
  return [<b style={{color:'purple'}}>Enter Store Details</b>, 
  <b style={{color:'purple'}}>Pick Your Plan</b>, 
  <b style={{color:'purple'}}>Checkout</b>];
}
  
function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <form class="form-group">
        <label>First Name</label>
        <input type="text" placeholder="First Name"></input>
        <br></br>
        <label>Last Name</label>
        <input type="text" placeholder="Last Name"></input>
        </form>
      );
    case 1:
      return (
        <form class="form-group">
        <label>High School Percentage</label>
        <input type="number" placeholder="High School Percentage"></input>
        <br></br>
        <label>Graduation percentage</label>
        <input type="number" placeholder="Graduation Percentage"></input>
        </form>
      );
    case 2:
      return (
        <form class="form-group">
        <label>Permanent Address</label>
        <input type="text" placeholder="Permanent Address"></input>
        <br></br>
        <label>Temporary Address</label>
        <input type="text" placeholder="Temporary Address"></input>
        </form>
      );
    default:
      return 'Unknown step';
  }
}
  
export default function CreateFormStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  
  const handleReset = () => {
    setActiveStep(0);
  };
  
  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="horizontal">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
     <div>
              <Typography>{getStepContent(activeStep)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
        </div>
    </div>
  );
}