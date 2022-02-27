import React, { useState, useEffect,useRef } from 'react'
import MaterialTable from "@material-table/core";
import {Grid,Button,Paper, TextField, MenuItem } from '@mui/material'; 
import {
  getInventoryList,
  addRowInInventory,
  updateRowInInventory,
  deleteRowInInventory,
  createInventoryFromTemplate
} from 'redux/actions/InventoryActions'
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router'; 
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import AddBoxSharpIcon from '@mui/icons-material/AddBoxSharp';

const columns = [
  {title: "iid", field: "iid", hidden: true},
  {field: 'itemid',  title: 'Item #' , },
  {field: 'seq',  title: 'Seq'  ,  editComponent: props => (
    <TextField
        id="Seq"
        type="number"
        onChange={e => {
            var data = { ...props.rowData };
            data.seq = e.target.value
            props.onRowDataChange(data);
        }}
        value={props.value}
    />
)},
  {field: 'itype', title: 'Item Category' },
  {field: 'name', title: 'Item Name' },
  {field: 'quantity', title: 'Unit/Quantity' ,  editComponent: props => (
    <TextField
        id="quantity"
        type="number"
        onChange={e => {
            var data = { ...props.rowData };
            data.quantity = e.target.value
            props.onRowDataChange(data);
        }}
        value={props.value}
    />
)},
  {field: 'mou',  title: 'UoM' ,  editComponent: props => (
    <TextField
        id="UoM"
        select
        onChange={e => {
            var data = { ...props.rowData };
            data.mou = e.target.value
            props.onRowDataChange(data);
        }}
        value={props.value}

    >
    <MenuItem key={1} value="ml">ml</MenuItem>
    <MenuItem key={1} value="pg">pg</MenuItem>
    <MenuItem key={2} value="kg">kg</MenuItem>
    <MenuItem key={3} value="Nos">Nos</MenuItem>
    <MenuItem key={4} value="ltr">ltr</MenuItem>
    <MenuItem key={5} value="grm">grm</MenuItem> 
    </TextField>
)},
{field: 'price', title: 'Price ( after Tax)' ,  editComponent: props => (
  <TextField
      id="Price"
      type="number"
      onChange={e => {
          var data = { ...props.rowData };
          data.price = e.target.value
          props.onRowDataChange(data);
      }}
      value={props.value}
  />
)},

  {field: 'tax',  title: 'Tax' ,  editComponent: props => (
    

    <TextField
    id="tax" 
    select
   value={props.value}
       onChange={e => {
        var data = { ...props.rowData };
        data.tax = e.target.value
        props.onRowDataChange(data);
    }}
    
   fullWidth
   >
               <MenuItem key={1} value="0">Tax:0%</MenuItem>
               <MenuItem key={2} value="0.1">Tax:0.1%</MenuItem>
               <MenuItem key={3} value="0.25">Tax:0.25%</MenuItem>
               <MenuItem key={4} value="0.03">Tax:3%</MenuItem>
               <MenuItem key={5} value="0.05">Tax:5%</MenuItem>
               <MenuItem key={6} value="0.12">Tax:12%</MenuItem>
               <MenuItem key={7} value="0.18">Tax:18%</MenuItem>
               <MenuItem key={8} value="0.23">Tax:23%</MenuItem> 
           </TextField>
)},
  {field: 'minStock',  title: 'Min Stock' ,  editComponent: props => (
    <TextField
        id="minStock"
        type="number"
        onChange={e => {
            var data = { ...props.rowData };
            data.minStock = e.target.value
        
            props.onRowDataChange(data);
        }}
        value={props.value}
    />
)},
  {field: 'maxStock',  title: 'Max Stock' ,  editComponent: props => (
    <TextField
        id="maxStock"
        type="number"
        onChange={e => {
            var data = { ...props.rowData };
            data.maxStock = e.target.value
          
            props.onRowDataChange(data);
        }}
        value={props.value}
    />
)}
  ]


export default function Inventory() {
    const { inventory = [] } = useSelector((state) => state.inventory)
    const dispatch = useDispatch();
    const router = useRouter();
    const { store } = router.query; 

    useEffect(() => {
      if(store) dispatch(getInventoryList(store)) 
  }, [store,dispatch])


  useEffect(() => {
    console.log(inventory)
}, [inventory])

const theme = useTheme();
const shouldShowTitle = useMediaQuery(theme.breakpoints.up('sm'));

  return (

<Grid container spacing={2} style={{ marginTop:'2px'}} >
 
  <Grid item xs={12}>
  <div style={{ height: '70Vh', width: '100%' }}>
      <MaterialTable
        title={shouldShowTitle?"Inventory":""}
        columns={columns}
        data={inventory}
        icons={{
          Add: () => <AddBoxSharpIcon style={{ color: "#2a0a4e" }} />,
        }}
        options={{
          grouping: true,
          defaultExpanded: true,
          headerStyle: {
            lineHeight: '2.5rem',
            backgroundColor: '#2a0a4e',
            color: '#FFF',
          },
          rowStyle: {
            fontFamily: '"Roboto","Helvetica","Arial","sans-serif"'
          },
          searchFieldStyle: {
            width: '100%',
            padding: '0px',
            margin: '0px'
        },
        actionsCellStyle:{
          backgroundColor: '#757cc9',
          width:'7%'
        },
        }}
        components={{
          Container: (props) => <Paper {...props}  />
        }}
        editable={{
          onRowAdd: newData => 
            new Promise((resolve, reject) => {
              dispatch(addRowInInventory(store,newData))
              resolve();
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              dispatch(updateRowInInventory(store,newData,oldData))
              resolve();
            }),
          onRowDelete: oldData =>
            new Promise((resolve, reject) => {
              dispatch(deleteRowInInventory(store,oldData))
              resolve();
            }),
        }}
      />
    </div>
  </Grid>
</Grid>
  );
}
