import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';

const storeTypes = [
  {
    value: 'BAR',
    label: 'Bar',
  },
  {
    value: 'Groceries',
    label: 'Groceries',
  },
  {
    value: 'RetailsOutlets',
    label: 'Retails Outlets',
  },
  {
    value: 'Other',
    label: 'Other',
  },
];

export default function StoreDetailsEF({formState, setFormState }) {
  const handleChange = (event) => {

        setFormState({...formState,...{
            [event.target.id]:event.target.value
        }});
        
        console.log(formState);
        console.log(event);
  };

  return (
    <Box
      component="form"
      sx={{
        marginTop:'20px'
      }}
      maxWidth={500}
      noValidate
      autoComplete="off"
    >
      <div>
 

            <Grid container spacing={2}>
                <Grid item xs={12} xm={12} md={12} >
                <TextField
                 id="type" 
                 select
                label="Store Type"
                required
                value={formState.type}
                onChange={(event, index, value)=>{
                    event.target.id="type";
                    handleChange(event)}}
                fullWidth
                >
                        {storeTypes.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}
                        </TextField>
                </Grid>
                <Grid item xs={12} xm={12} md={12}>
                <TextField
                        id="name"
                        label="Store Name"
                        variant="filled"
                        value={formState.name}
                        onChange={handleChange}
                        fullWidth 
                        required
                        />
                </Grid>
                <Grid item xs={12} xm={12} md={12}>
                <TextField
                        id="gst_number"
                        label="GST Number"   
                        variant="filled"       
                        value={formState.gst_number}
                        onChange={handleChange}
                        fullWidth 
                        required
                        />
                </Grid>
                <Grid item xs={12} xm={12} md={12}>
                <TextField
                        id="address"
                        label="Address"
                        variant="filled"
                        value={formState.address}
                        onChange={handleChange}
                        fullWidth 
                        multiline
                        maxRows={4}
                        required
                        />
                </Grid>
                <Grid item xs={12} xm={12} md={12}>
                <TextField
                        id="pincode"
                        label="PinCode"
                        variant="filled"
                        value={formState.pincode}
                        onChange={handleChange}
                        fullWidth 
                        required
                        />
                </Grid>
                </Grid>
       
      </div>
    </Box>
  );
}