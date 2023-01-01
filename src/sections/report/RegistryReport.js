
import React, {Component} from 'react'
import dynamic from 'next/dynamic';
import {  useEffect,useRef } from 'react'
import { Grid, Button , Stack } from '@mui/material'; 
import { useDispatch, useSelector } from 'react-redux';
import { useReactToPrint } from 'react-to-print';
import ViewRegistrySummaryStatement from './ViewRegistrySummaryStatement'

const RegistryReport = ({data}) => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle:`Registry_Summary_Statement`
  });

      return (
            <div id="Registry Report">
            <Grid container spacing={1}>
         <Grid  item xs={12} >
            <Stack direction="row" justifyContent="end" spacing={2}>
               {
                <Button raised="true"  variant="contained"  color="primary" onClick={handlePrint} >
                    Print
                </Button>
                }
            </Stack>
        </Grid> 
        <Grid item xs={12}>
             <ViewRegistrySummaryStatement componentRef={componentRef} data={data}/> 
        </Grid> 
        </Grid>
          </div>
         )
}



export default RegistryReport