import React, { useState, useEffect,useRef } from 'react'
import MaterialTable from "@material-table/core";
import {Grid,Button,Paper} from '@mui/material'; 
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
  {field: 'itype', title: 'Perticular Type', },
  {field: 'name', title: 'Perticular Name', },
  {field: 'quantity', title: 'Quantity/Units',},
  {field: 'price',  title: 'Price',}
  ]


export default function Inventory() {
    const { inventory = [] } = useSelector((state) => state.inventory)
    const dispatch = useDispatch();
    const router = useRouter();
    const { store } = router.query; 

    useEffect(() => {
      dispatch(getInventoryList(store)) 
  }, [dispatch])


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
