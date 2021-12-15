import * as React from 'react';
import MaterialTable from "@material-table/core";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Typography  from '@mui/material/Typography';

const options = ['Add New Item', 'Reset Inventory' ];

const columns = [
  { field: 'id', title: 'ID', flex: 0.5,},
  { field: 'itype', title: 'Perticular Type', flex: 1, },
  { field: 'name', title: 'Perticular Name',flex: 1,  },
  {
    field: 'quantity',
    title: 'Quantity',
    flex: 0.5,
  },
  {
    field: 'price',
    title: 'Price',
    flex: 0.5,
  }
];

const rows = [
  {"id":6,"bid":14,"itype":"Wiskhey","name":"Old Monk","quantity":"750 Ml","price":"50"},
  {"id":7,"bid":14,"itype":"BEER","name":"OLD MONK","quantity":"500 ml","price":"50"},
  {"id":8,"bid":14,"itype":"Wiskhey","name":"Old Monk","quantity":"50 Ml","price":"50"},
  {"id":9,"bid":14,"itype":"Wiskhey","name":"Old Monk","quantity":"750 Ml","price":"50"},
  {"id":10,"bid":14,"itype":"Wiskhey","name":"Old Monk","quantity":"350 Ml","price":"50"},
  {"id":11,"bid":14,"itype":"Wiskhey","name":"Old Monk","quantity":"350 Ml","price":"50"},
  {"id":12,"bid":14,"itype":"Wiskhey","name":"Old Monk","quantity":"350 Ml","price":"50"},
  {"id":13,"bid":14,"itype":"Wiskhey","name":"Old Monk","quantity":"350 Ml","price":"50"},
  {"id":14,"bid":14,"itype":"Wiskhey","name":"Old Monk","quantity":"350 Ml","price":"50"},
  {"id":15,"bid":14,"itype":"Wiskhey","name":"Old Monk","quantity":"350 Ml","price":"50"},
  {"id":16,"bid":14,"itype":"Wiskhey","name":"Old Monk","quantity":"350 Ml","price":"50"},
  {"id":17,"bid":14,"itype":"Wiskhey","name":"Old Monk","quantity":"350 Ml","price":"50"},
  {"id":18,"bid":14,"itype":"Wiskhey","name":"Old Monk","quantity":"350 Ml","price":"50"},
  {"id":19,"bid":14,"itype":"Wiskhey","name":"Old Monk","quantity":"350 Ml","price":"50"},
  {"id":20,"bid":14,"itype":"Wiskhey","name":"Old Monk","quantity":"350 Ml","price":"50"},
  {"id":21,"bid":14,"itype":"Wiskhey","name":"Old Monk","quantity":"350 Ml","price":"50"},
  {"id":22,"bid":14,"itype":"Wiskhey","name":"Old Monk","quantity":"350 Ml","price":"50"},
  {"id":23,"bid":14,"itype":"Wiskhey","name":"Old Monk","quantity":"350 Ml","price":"50"},
  {"id":24,"bid":14,"itype":"Wiskhey","name":"Old Monk","quantity":"350 Ml","price":"50"},
  {"id":25,"bid":14,"itype":"Wiskhey","name":"Old Monk","quantity":"350 Ml","price":"50"},
  {"id":26,"bid":14,"itype":"Wiskhey","name":"Old Monk","quantity":"350 Ml","price":"50"},
  {"id":27,"bid":14,"itype":"Wiskhey","name":"Old Monk","quantity":"350 Ml","price":"50"}
]

export default function Inventory() {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const [selectedIndex, setSelectedIndex] = React.useState(0);
  
    const handleClick = () => {
      console.info(`You clicked ${options[selectedIndex]}`);
    };
  
    const handleMenuItemClick = (event, index) => {
      setSelectedIndex(index);
      setOpen(false);
    };
  
    const handleToggle = () => {
      setOpen((prevOpen) => !prevOpen);
    };
  
    const handleClose = (event) => {
      if (anchorRef.current && anchorRef.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };

  return (

<Grid container spacing={2} style={{ marginTop:'2px'}} >

  <Grid item xs={12} >
      <Paper style={{ display:'flex', direction:'column'}}> 
      <Grid container justifyContent="flex-start">
            <Typography variant="h4" component="h5" style={{padding:'2px'}}>
                Inventory
            </Typography>
       </Grid>
      <Grid container justifyContent="flex-end">
  <ButtonGroup variant="contained" ref={anchorRef} aria-label="split button">
        <Button onClick={handleClick}>{options[selectedIndex]}</Button>
        <Button
          size="small"
          aria-controls={open ? 'split-button-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleToggle}
        >
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        style={{zIndex:3}}
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu">
                  {options.map((option, index) => (
                    <MenuItem
                      key={option}
                      selected={index === selectedIndex}
                      onClick={(event) => handleMenuItemClick(event, index)}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
      </Grid>
      </Paper>
  </Grid>
  <Grid item xs={12}>
  <div style={{ height: '70Vh', width: '100%' }}>
      <MaterialTable
        rows={rows}
        columns={columns}
      />
    </div>
  </Grid>
</Grid>
    
  );
}