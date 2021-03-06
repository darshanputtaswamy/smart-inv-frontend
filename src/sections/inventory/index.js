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

 
  return (

<Grid container spacing={2} style={{ marginTop:'2px'}} >
 
  <Grid item xs={12}>
  <div style={{ height: '70Vh', width: '100%' }}>
      <MaterialTable
        title="Inventory"
        columns={columns}
        data={inventory}
        options={{
          grouping: true,
          defaultExpanded: true

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