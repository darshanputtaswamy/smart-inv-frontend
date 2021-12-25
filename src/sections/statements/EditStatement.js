import React, { useState, useEffect, useRef, createRef } from 'react'
import MaterialTable, { MTableToolbar, MTableActions } from "@material-table/core";
import { Grid, Button, Paper, Typography,Stack  , Box, Card, CardHeader, CardContent, TableBody, Table, TableRow, TableCell, TextField, TextareaAutosize, MenuItem } from '@mui/material';
import {
    getStatement,
    updateRowInStatement,
    updateRowInStatementRegistory,
} from 'redux/actions/StatementActions'
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

export default function EditStatement({ setParentIsDirty, statementSummary, disableOpen , setViewMode}) {
    let [formState, setFormState] = useState({
        previous_sid:statementSummary.previous_sid,
        bid:statementSummary.bid,
        sid:statementSummary.sid,
        tdate:statementSummary.tdate,
        fdate:statementSummary.fdate,
        actual_total: statementSummary.actual_total,
        auto_total: statementSummary.auto_total,
        exp_total: statementSummary.exp_total,
        cash_paid: statementSummary.cash_paid,
        card_paid: statementSummary.card_paid,
        cash_balance: statementSummary.cash_balance,
        exp_comments: statementSummary.exp_comments,
        status: statementSummary.status,
    })
    let [isDirty, setIsDirty] = useState(false);
    
    const {
        statement = [],
        statementActualTotal = 0,
        statementAutoTotal = 0 } = useSelector((state) => state.store)


        const dispatch = useDispatch();
        const router = useRouter();
    
        const { store, id } = router.query;
    
        useEffect(() => {
            dispatch(getStatement(store, id))
        }, [dispatch])
    
        useEffect(()=>{
            console.log(statementSummary)
            setFormState({
                previous_sid:statementSummary.previous_sid,
                bid:statementSummary.bid,
                sid:statementSummary.sid,
                tdate:statementSummary.tdate,
                fdate:statementSummary.fdate,
                actual_total: statementSummary.actual_total,
                auto_total: statementSummary.auto_total,
                exp_total: statementSummary.exp_total,
                cash_paid: statementSummary.cash_paid,
                card_paid: statementSummary.card_paid,
                cash_balance: statementSummary.cash_balance,
                exp_comments: statementSummary.exp_comments,
                status: statementSummary.status,
            })
        },[statementSummary])
    
        useEffect(() => {
            setFormState({
                ...formState, ...{
                    actual_total: statementActualTotal,
                    auto_total: statementAutoTotal
                }
            })
        }, [statementActualTotal, statementAutoTotal])
    
        const handleChange = (event) => {
    
            setFormState({
                ...formState, ...{
                    [event.target.id]: event.target.value
                }
            });
            console.log(formState)
        };
    
        const handleSubmit = () =>{
            dispatch(updateRowInStatementRegistory(store, formState)).then(function(e){
                setParentIsDirty(true);
                setViewMode(true)
            }).catch(function(e){
                console.log("Something happened")
            }).finally(function(e){
                console.log("finally done")
            })
        }

        
    const columns = [
        { field: 'itype', title: 'Perticular Type', editable: 'never', defaultGroupOrder: 0 },
        { field: 'name', title: 'Perticular Name', editable: 'never', defaultGroupOrder: 1 },
        { field: 'quantity', title: 'Quantity/Units', editable: 'never' },
        { field: 'id', title: 'id', hidden: true, editable: 'never' },
        { field: 'bid', title: 'bid', hidden: true, editable: 'never' },
        { field: 'sid', title: 'sid', hidden: true, editable: 'never' },
        { field: 'iid', title: 'iid', hidden: true, editable: 'never' },
        {
            field: 'open', title: 'Open',
            editComponent: props => (
                <TextField
                    id="open"
                    type="number"
                    onChange={e => {
                        var data = { ...props.rowData };
                        data.open = e.target.value
                        let received = isNaN(data.received) ? 0 : data.received;
                        let open = isNaN(data.open) ? 0 : data.open;
                        let closed = isNaN(data.closed) ? 0 : data.closed;
                        data.actual_total = (parseInt(received) + parseInt(open) - parseInt(closed)) * parseFloat(data.cost);
                        props.onRowDataChange(data);
                    }}
                    value={props.value}
                    disabled={disableOpen}
                />
            )
        },
        {
            field: 'received', title: 'Received',
            editComponent: props => (
                <TextField
                    id="received"
                    type="number"
                    onChange={e => {
                        var data = { ...props.rowData };
                        data.received = e.target.value
                        let received = isNaN(data.received) ? 0 : data.received;
                        let open = isNaN(data.open) ? 0 : data.open;
                        let closed = isNaN(data.closed) ? 0 : data.closed;
                        data.actual_total = (parseInt(received) + parseInt(open) - parseInt(closed)) * parseFloat(data.cost);
                        props.onRowDataChange(data);
                    }}
                    value={props.value}
                />
            )
        },
        {
            field: 'closed', title: 'Closed',
            editComponent: props => (
                <TextField
                    id="closed"
                    type="number"
                    onChange={e => {
                        var data = { ...props.rowData };
                        data.closed = e.target.value
                        let received = isNaN(data.received) ? 0 : data.received;
                        let open = isNaN(data.open) ? 0 : data.open;
                        let closed = isNaN(data.closed) ? 0 : data.closed;
                        data.actual_total = (parseInt(received) + parseInt(open) - parseInt(closed)) * parseFloat(data.cost);
                        props.onRowDataChange(data);
                    }}
                    value={props.value}
                />
            )
        },

        {
            field: 'actual_total',
            title: 'Actual Total', editComponent: props => (
                <TextField
                    id="actual_total"
                    type="number"
                    onChange={e => { props.onChange(e.target.value) }}
                    value={props.value}
                />
            )
        },
        { field: 'sales', title: 'Sales', editable: 'never' },
        { field: 'auto_total', title: 'Auto Total', editable: 'never' },
        { field: 'cost', title: 'Cost/Unit', editable: 'never' },
    ];



    return (

        <Grid container spacing={2} style={{ marginTop: '2px' }} >
            <Grid item xs={12}>
                <div style={{ width: '100%' }}>
                    <MaterialTable
                        title="Statement"
                        data={statement}
                        options={{
                            grouping: true,
                            defaultExpanded: true

                        }}
                        components={{
                            Container: (props) => <Paper {...props}  />,
                        }}
                        columns={columns}

                        editable={{
                            onRowUpdate: (newData, oldData) =>
                                new Promise((resolve, reject) => {
                                    dispatch(updateRowInStatement(store, newData, oldData))
                                    setIsDirty(true)
                                    resolve();
                                })
                        }}
                    />
                </div>
            </Grid>


            <Grid item xs={12} xm={12} md={12} >

                <Paper sx={{  paddingBottom: '5px', }} elevation={2}  >
                    
                  <Grid container spacing={4} sx={{ padding:'15px' }}>
                    <Grid item xs={12} xm={12} md={12} lg={12} >
                    <Typography variant="h6" component="div">
                        Statement Summary
                    </Typography>
                                
                        </Grid>
                        <Grid item xs={12} xm={6} md={6} >
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                id="fdate"
                                label="From Date"
                                value={formState.fdate}
                                onChange={(value)=>{
                                    let event = {}
                                    event.target = {}
                                    event.target.id="fdate";
                                    event.target.value=value
                                    handleChange(event)}}
                                renderInput={(params) => <TextField {...params} />}
                            />
                            </LocalizationProvider>
                        </Grid>
                        <Grid item xs={12} xm={6} md={6} >
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                id="tdate"
                                label="To Date"
                                value={formState.tdate}
                                onChange={(value)=>{
                                    let event = {}
                                    event.target = {}
                                    event.target.id="tdate";
                                    event.target.value=value
                                    handleChange(event)}}
                                renderInput={(params) => <TextField {...params} />}
                            />
                            </LocalizationProvider>
                        </Grid>

                        <Grid item xs={12} xm={6} md={6} >
                            <TextField
                                id="actual_total"
                                label="Actual Total"
                                type="number"
                                value={formState.actual_total}
                                disabled
                                fullWidth
                                onChange={handleChange}

                            />
                        </Grid>
                        <Grid item xs={12} xm={6} md={6}>
                            <TextField
                                id="auto_total"
                                label="Auto Total"
                                type="number"
                                value={formState.auto_total}
                                disabled
                                fullWidth
                                onChange={handleChange}

                            />

                        </Grid>
                        <Grid item xs={12} xm={6} md={6}>
                            <TextField
                                id="exp_total"
                                label="Expenditure"
                                type="number"
                                value={formState.exp_total}
                                fullWidth
                                onChange={handleChange}

                            />

                        </Grid>
                        <Grid item xs={12} xm={6} md={6}>
                            <TextField
                                id="cash_paid"
                                label="Cash Paid"
                                type="number"
                                value={formState.cash_paid}
                                fullWidth
                                onChange={handleChange}

                            />

                        </Grid>
                        <Grid item xs={12} xm={6} md={6}>
                            <TextField
                                id="card_paid"
                                label="Card Paid"
                                type="number"
                                value={formState.card_paid}
                                fullWidth
                                onChange={handleChange}

                            />

                        </Grid>
                        <Grid item xs={12} xm={6} md={6}>
                            <TextField
                                id="cash_balance"
                                label="Cash Balance"
                                type="number"
                                value={formState.cash_balance}
                                fullWidth
                                onChange={handleChange}

                            />

                        </Grid>
                        <Grid item xs={12} xm={6} md={6}>
                            <TextField
                                multiline
                                minRows={5}
                                id="exp_comments"
                                label="Comments"
                                placeholder="Expenditure Comments"
                                value={formState.exp_comments}
                                onChange={handleChange}
                                fullWidth

                            />

                        </Grid>
                        <Grid item xs={12} xm={6} md={6}>
                            <TextField
                                id="status"
                                select
                                label="Statement Status"
                                required
                                value={formState.status}
                                fullWidth
                                onChange={(event, index, value)=>{
                                    event.target.id="status";
                                    handleChange(event)}}
                            >
                                <MenuItem value="New">
                                    New
                                </MenuItem>
                                <MenuItem value="Approved">
                                    Approved
                                </MenuItem>
                                <MenuItem value="Complete">
                                    Complete
                                </MenuItem>
                                <MenuItem value="In Progress">
                                In Progress
                                </MenuItem>
                            </TextField>
                            <Stack  style={{paddingTop:'10px'}} direction="row" justifyContent="end" spacing={2}>
                                {!isDirty && <Button  raised="true"  variant="contained"  color="primary" onClick={(e)=>setViewMode(true)} >
                                    Cancel
                                </Button> 
                                }
                                {<Button  raised="true"  variant="contained"  color="primary" onClick={handleSubmit} >
                                    Submit
                                </Button> 
                                }
                           </Stack>

                             
                        </Grid>

                    </Grid>

                </Paper>
            </Grid>
        </Grid>

    );
}