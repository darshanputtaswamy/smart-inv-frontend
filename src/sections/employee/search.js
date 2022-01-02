import api from '/api.js'
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';

 
export default function AsynchronousSearchAppUser({setNewfuid}) {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;
  const [ value, setValue] = React.useState(null);
  const [ filteredValue, setFilteredValue] = React.useState(null);
  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      if (active && (filteredValue && filteredValue.length >= 6)) {
        api.get(`/user?filterPhone=${filteredValue}`).then((res) => {
            console.log(res)
            setOptions([...res.data]);
        })        
      }
    })();

    return () => {
      active = false;
    };
  }, [loading,filteredValue]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <Autocomplete
      id="asynchronous-demo"
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      value={value}
      onChange={(event, newValue) => {
          console.log(event)
          setValue(newValue); 
          setNewfuid(newValue.uid);
        }}
      onInputChange={(event,newValue)=>{
        setFilteredValue(newValue)
      }}
      isOptionEqualToValue={(option, value) => option.phone === value.phone}
      getOptionLabel={(option) => option.phone + ` - [ ${option.username} ]` }
      options={options}
      loading={loading}
      fullWidth
      renderInput={(params) => (
        <TextField
          fullWidth
          {...params}
          label="User Phone Number"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
}
 