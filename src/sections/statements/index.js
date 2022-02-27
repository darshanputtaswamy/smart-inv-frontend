import React, { useState, useEffect,useRef } from 'react'
import { Grid, Button , Stack , Paper, Card, CardHeader, CardContent, TableBody, Table,TableRow , TableCell} from '@mui/material'; 
import ViewStatement from './ViewStatement';
import EditStatement from './EditStatement';
import {  
    deleteRowInStatementRegistory,
    getStatementRegistoryById
} from 'redux/actions/StatementActions'
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router'; 
import { useReactToPrint } from 'react-to-print';





export default function StatementIndex({lobDetails}) {
    const { selectedStatement = {} } = useSelector((state) => state.store)
    const dispatch = useDispatch();
    const router = useRouter();
    const { store,id } = router.query; 
  
    let [ isDirty, setParentIsDirty] = useState(false);
    let [ viewMode, setViewMode] = useState(true);
    let [ disableOpen, setDisableOpen] = useState(true);
    useEffect(() => {
        if(store && id)  dispatch(getStatementRegistoryById(store,id)) 
  }, [store,id, isDirty, dispatch])

  
  
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: (!selectedStatement || !selectedStatement[0]) ? 'Statement': `Statement ${selectedStatement.fdate} - ${selectedStatement.tdate}`
   
  }, [selectedStatement]);
  
  const handleDelete = function(e){
    
    dispatch(deleteRowInStatementRegistory(store,id)).then(function(e){
        router.push(`/main/${store}/statements`);
    }).catch(function(e){
        console.log("Something happened")
    }).finally(function(e){
        console.log("finally done")
    })
  }


  useEffect(() => {
    console.log(selectedStatement)
        if (selectedStatement.previous_sid){
            setDisableOpen(true)
        }else{
            setDisableOpen(false)
        }
  }, [selectedStatement])

  return (
    <Grid container spacing={1}>
         <Grid  item xs={12} >
            <Stack direction="row" justifyContent="end" spacing={2}>
               {viewMode && 
               <>
                <Button raised="true"  variant="contained"  color="primary" onClick={handleDelete} >
                          Delete
                 </Button>
                <Button raised="true"  variant="contained"  color="primary" onClick={(e)=>setViewMode(!viewMode)} >
                    Edit
                </Button>
                </>
                }
                {viewMode && 
                <Button raised="true"  variant="contained"  color="primary" onClick={handlePrint} >
                    Print
                </Button>
                }
         
            </Stack>
        </Grid> 
        <Grid item xs={12}>
            {viewMode ? <div> <ViewStatement componentRef={componentRef} lobDetails={lobDetails} statementSummary={selectedStatement} /> </div>: <div> <EditStatement setParentIsDirty={setParentIsDirty} statementSummary={selectedStatement} disableOpen={disableOpen} setViewMode={setViewMode}/> </div>}
        </Grid> 
    </Grid>
   
  );

}