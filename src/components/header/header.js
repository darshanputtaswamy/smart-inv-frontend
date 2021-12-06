

import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/system";
import SideDrawer from "./sideBar";
import Navbar from "./navbar";




const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

const Header = () => {

   
const navLinks  = [
  {'title': 'Store',
   'path':'/main/'
  },
  {'title': 'Employee',
  'path':'/main/employee'
  },
  {'title': 'Reports',
  'path':'/main/reports'
  },
  {'title': 'Profile',
  'path':'/main/profile'
  },
  {'title': 'Logout',
  'path':'/'
  }];



  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Container
            maxWidth="lg"
            sx={{ display: `flex`, justifyContent: `space-between` }}
          >
           EZBar
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