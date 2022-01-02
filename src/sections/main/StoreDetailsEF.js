import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

const storeTypes = [
  {
    value: 'Bar',
    label: 'Bar',
  },
  {
    value: 'Footwear',
    label: 'Footwear',
  },
  {
    value: 'Retail',
    label: 'Retail',
  },
  {
    value: 'Clothing',
    label: 'Clothing',
  },
];

export default function StoreDetailsEF({formState, setFormState }) {
  const handleChange = (event) => {

        setFormState({...formState,...{
            [event.target.id]:event.target.value
        }});
        
  };

  return (
<>
    <div className="w-full text-center mb-11">
    <h3 className="m-0 font-medium">
        Enter Your Store Details
    </h3>
</div>
    <Paper elevation={4} sx={{display:'flex', justifyContent:'space-around', paddingBottom:'25px'}}> 
 
    <Box
      component="form"
      sx={{
        marginTop:'20px'
      }}
      maxWidth={500}
      noValidate
      autoComplete="off"
    > 
 
    
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
                        value={formState.pincode}
                        onChange={handleChange}
                        fullWidth 
                        required
                        />
                </Grid>
                </Grid>
               
      
    </Box>
    </Paper>
    </>
  );
}