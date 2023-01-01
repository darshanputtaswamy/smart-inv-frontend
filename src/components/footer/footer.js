import React, {useState, useRef , useEffect} from 'react'; 
import Box from '@mui/material/Box'; 
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction'; 
import Paper from '@mui/material/Paper';  
import CottageRoundedIcon from '@mui/icons-material/CottageRounded';
import BallotRoundedIcon from '@mui/icons-material/BallotRounded';
import AutoStoriesRoundedIcon from '@mui/icons-material/AutoStoriesRounded';
import LoyaltyRoundedIcon from '@mui/icons-material/LoyaltyRounded';
import { makeStyles} from '@mui/styles'
import { useRouter } from 'next/router';

const useStyles = makeStyles((theme) => { 
   return {
    root: {
        color: '#c6acc9',
    },
    selected: {
      color:'#2a0a4e'
    }
  }
});

const menuItems = [
  "",
  "inventory",
  "statements",
  "subscription"
];


export default function Footer() {

  const classes = useStyles()
  const router = useRouter();

  let x= router.pathname.split('/')
  let tabIndex;
  if (x.length == 2){
    tabIndex=0
  }else{
    tabIndex=menuItems.indexOf(x[x.length-1])

  }
  const [value, setValue] = useState(tabIndex);
  const ref = useRef(null);

  useEffect(() => {

    ref.current.ownerDocument.body.scrollTop = 0;
    let x= router.pathname.split('/')
    if (x.length == 3){
      setValue(0)
    }else{
      setValue(menuItems.indexOf(x[x.length-1]))
     }

  }, [value]);
 

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            const { store } = router.query; 
            router.push(`/main/${store}/${menuItems[newValue]}`) 
            setValue(newValue)
            console.log(router.pathname);
          }}
        >
          <BottomNavigationAction className={classes.root}  label="Home" icon={<CottageRoundedIcon />} />
          <BottomNavigationAction className={classes.root}  label="Inventory" icon={<BallotRoundedIcon />} />
          <BottomNavigationAction className={classes.root}  label="Registry" icon={<AutoStoriesRoundedIcon />} />
          <BottomNavigationAction className={classes.root}  label="Subscription" icon={<LoyaltyRoundedIcon />} />

        </BottomNavigation>
      </Paper>
      
    </Box>
  );
}
 