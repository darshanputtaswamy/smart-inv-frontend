

import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/system";
import SideDrawer from "./sideBar";
import Navbar from "./navbar";
import Logo from 'components/logo';


const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

const Header = () => {

   
const navLinks  = [
  {'title': 'Stores',
   'path':'/main',
   'onClick':function(e){console.log("working");console.log(e)}
  },
  {'title': 'Employee',
  'path':'/main/employee',
  'onClick':function(e){console.log("working");console.log(e)}
  },
  {'title': 'Reports',
  'path':'/main/reports',
  'onClick':function(e){console.log("working");console.log(e)}
  },
  {'title': 'Profile',
  'path':'/main/profile',
  'onClick':function(e){console.log("working");console.log(e)}
  },
  {'title': 'Logout',
  'path':'/',
  'onClick':function(e){console.log("working");console.log(e)}
  }];



  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Container
            maxWidth="xl"
            sx={{ display: `flex`, justifyContent: `space-between` }}
          >
            <Logo sx={styles.logo} sx={{width:'100px', height:'50px'}}/>
          </Container>
          <SideDrawer navLinks={navLinks} />
          <Navbar navLinks={navLinks} />
        </Toolbar>
      </AppBar>
      <Offset />
    </>
  );
};

export default Header;


  
const styles = {
  header: {
    position: 'fixed',
    left: 0,
    right: 0,
    py: 4,
    transition: 'all 0.3s ease-in-out 0s',
    '&.is-sticky': {
      backgroundColor: 'white',
      boxShadow: '0 6px 13px rgba(38,78,118,0.1)',
      paddingTop: '15px',
      paddingBottom: '15px',
    },
    '&.is-mobile-menu': {
      backgroundColor: 'white',
    },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    mr: [null, null, null, null, 6, null, 12],
  },
  buttonGroup: {
    alignItems: 'center',
    marginLeft: 'auto',
    button: {
      fontWeight: 500,
    },
  },
  login: {
    display: ['none', null, null, null, 'flex'],
    color: 'white',
    p: 0,
    mr: [null, null, null, null, 5],
    svg: {
      mr: 2,
    },
  },
  joinCommunity: {
    backgroundColor: 'white',
    minHeight: [30, null, null, 40],
    p: ['0 12px', null, null, '0 14px'],
    fontSize: ['10px', null, null, 1],
  },
  hamburger: {
    display: [null, null, null, null, null, 'none'],
  },
};
