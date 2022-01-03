import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import { Grid,TextField, Button , Stack , Paper, Card, CardHeader, CardContent,Typography,MenuItem ,  TableBody, Table,TableRow , TableCell, } from '@mui/material'; 
import ReactTooltip from 'react-tooltip';
import Ammount from './TotalAmount';
import RevenueViz from './Revenue';
import ExpenditureViz from './Expenditure';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react'
import {
  getUserProfile 
} from 'redux/actions/UserProfileActions'
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
  const [newfDate, setNewfDate] = useState(new Date());
  const [newtDate, setNewtDate] = useState(new Date());

  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up('sm'));
  useEffect(() => {
    dispatch(getUserProfile()) 
}, [dispatch])


  return (
<>
<Grid conatiner spacing={2} style={{ marginTop: '2px' }}>
<Grid item  > 
<Paper elevation={4}  style={{ margin: '5px', padding:'15px'}} >
<LocalizationProvider dateAdapter={AdapterDateFns}>
<Stack spacing={3} direction={smUp?'row':'column'}>
        <TextField
              id="bid"
              select
              sx={{ marginTop:'5px'}}
              label="Store Name"
              required
              value={bid}
              onChange={(event)=>{
                setbid(event.target.value)
              }}
              sx={{ minWidth: "10%" }} 
          >
             <MenuItem value='All'>
                        All 
                    </MenuItem>
            {
                stores.map(function(rowData){
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
          onChange={(value)=>{setNewfDate(value)}}
          renderInput={(params) => <TextField {...params} />}
        />
        <MobileDatePicker
          label="To Date"
          inputFormat="MM/dd/yyyy"
          value={newtDate}
          onChange={(value)=>{setNewtDate(value)}}
          renderInput={(params) => <TextField {...params} />}
        />
<div>
        <Button variant='contained'  sx={{ padding: "15px 20px" }}  > Submit</Button>
        </div>
</Stack>
</LocalizationProvider>

</Paper>
</Grid>
<Grid container spacing={4} sx={{ padding:'15px' }}>
  <Grid item xs={12} md={6} lg={6} xl={6} > 
  <Card elevation={4}>
    <CardHeader
      title={<><Typography variant="div" component="p">
        Revenue Accross Stores
      </Typography>
      </>
      }
      titleTypographyProps={{variant:'h7' }}
      sx={{background:"#2a0a4e", color:"#fff"}}
      />
    <CardContent>
      <RevenueViz />
    </CardContent>
  </Card>
  
  </Grid>
  <Grid item xs={12} md={6} lg={6} xl={6}> 
  <Card elevation={4}>
    <CardHeader
      title={<><Typography variant="div" component="p">
        Expenditure Accross Stores
      </Typography>
      </>
      }
      titleTypographyProps={{variant:'h7' }}
      sx={{background:"#2a0a4e", color:"#fff"}}
      />
    <CardContent>
      <ExpenditureViz />
    </CardContent>
  </Card>
  </Grid>
  </Grid>
  <Grid item > 
  <Card elevation={4}>
    <CardHeader
      title={<><Typography variant="div" component="p">
        Total Amount
      </Typography>
      </>
      }
      titleTypographyProps={{variant:'h7' }}
      sx={{background:"#2a0a4e", color:"#fff"}}
      />
    <CardContent>
      <Ammount />
    </CardContent>
  </Card>
  </Grid>
  <Grid item > 
  <Card elevation={4}>
    <CardHeader
      title={<><Typography variant="div" component="p">
        Expenditure Accross Stores
      </Typography>
      </>
      }
      titleTypographyProps={{variant:'h7' }}
      sx={{background:"#2a0a4e", color:"#fff"}}
      />
    <CardContent>
  
    </CardContent>
  </Card>
  </Grid>

</Grid>

  

  
 

    </>
  );
}

function shiftDate(date, numDays) {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + numDays);
  return newDate;
}

function getRange(count) {
  return Array.from({ length: count }, (_, i) => i);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
 
