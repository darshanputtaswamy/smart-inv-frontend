import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import { Grid,TextField, Button , Stack , Paper, Card, CardHeader, CardContent,Typography,MenuItem ,  TableBody, Table,TableRow , TableCell, } from '@mui/material'; 
import ExpenditureViz from './Expenditure';
import RegistryReport from './RegistryReport';
import SalesViz  from './SalesChart';
import { useDispatch, useSelector  } from 'react-redux';
import React, { useState, useEffect ,useCallback } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import {
  getLobList
} from 'redux/actions/LobActions'

import {getStatementRegistryForListLobs} from 'redux/actions/StatementActions'


const today = new Date();
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Report() {
  const { stores = [] } = useSelector((state) => state.user)
  const dispatch = useDispatch();
  const [bid, setbid] = useState('All');
  let date = new Date();

  const [newfDate, setNewfDate] = useState( new Date(date.getFullYear(), date.getMonth()-1, 1));
  const [newtDate, setNewtDate] = useState(new Date(date.getFullYear(), date.getMonth(), 0));
  const { lobList = []} = useSelector((state) => state.lob)
  const [reset,toggleReset]= useState(false)
  const { statementRegistryForListLobs = []  } = useSelector((state) => state.store)

  useEffect(() => {
    if(lobList.length == 0){
      dispatch(getLobList()) 
    }
  }, [])

  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up('sm'));

  const [tab, setTab] = useState('registry-report');

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
  };



  const handleonClick = useCallback(event => {
    event.preventDefault();
    if(lobList.length >0 ) {
      dispatch(getStatementRegistryForListLobs(lobList.filter(e=> e.bid == bid || bid == 'All'),newfDate,newtDate))
    } 

  }, [bid,newfDate,newtDate,]);

  return (
<>
<Grid conatiner  style={{ marginTop: '2px' }}>
<Grid item  > 
<Paper elevation={4}  style={{ margin: '5px', padding:'15px'}} >
<LocalizationProvider dateAdapter={AdapterDateFns}>
<Stack spacing={3} direction={smUp?'row':'column'}>
        <TextField
              id="bid"
              select
              sx={{ marginTop:'5px',minWidth: "10%"}}
              label="Store Name"
              required
              value={bid}
              onChange={(event)=>{
                
                setbid(event.target.value)
              }}
          >
             <MenuItem value='All'>
                        All 
                    </MenuItem>
            {
                lobList.filter(e=>e.role != 'user').map(function(rowData){
                  return (
                    <MenuItem value={rowData.bid}>
                        {rowData.bname} - [{rowData.address} - {rowData.postal_code}] 
                    </MenuItem>
                  )
                })

            } 
          </TextField>
      
        <MobileDatePicker
          label="From Date"
          inputFormat="MM/dd/yyyy"
          value={newfDate}
          onChange={(value)=>{setNewfDate(value)
            console.log(value)
          }}
          renderInput={(params) => <TextField {...params} />}
        />
        <MobileDatePicker
          label="To Date"
          inputFormat="MM/dd/yyyy"
          value={newtDate}
          onChange={(value)=>{setNewtDate(value)
            console.log(value)
          }}
          renderInput={(params) => <TextField {...params} />}
        />
<div>
        <Button variant='contained'  sx={{ padding: "15px 20px" }}  onClick={handleonClick}
        > Submit</Button>
        </div>
</Stack>
</LocalizationProvider>

</Paper>
</Grid>
</Grid>

<Box sx={{ width: '100%' }}>
  <>
      <Tabs
        value={tab}
        onChange={handleTabChange}
        indicatorColor="secondary"
        textColor="inherit"
        variant="fullWidth"
        role="tabpanel"
      >
        <Tab key={1} value="registry-report" label="Registry Report" />
        <Tab key={2} value="expense-chart" label="Expense Chart" />
        <Tab key={3} value="sales-chart" label="Sales Chart" />
      </Tabs>
      { tab == "registry-report" && lobList.length > 0  && <RegistryReport data={statementRegistryForListLobs}/>}
      { tab == "expense-chart"  &&  lobList.length > 0  &&  <ExpenditureViz data={statementRegistryForListLobs}/>}
      { tab == 'sales-chart'  && lobList.length >0 && <SalesViz data={statementRegistryForListLobs}/>}
      </>
    </Box>
</>
  );
}
