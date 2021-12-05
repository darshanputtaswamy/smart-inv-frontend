/** @jsx jsx */ /** @jsxRuntime classic */
import { jsx, Box } from 'theme-ui';
import { NavLink } from 'components/link';
import menuItems from './header.data';
import { useRouter } from "next/router"
import Link from "next/link"
import { useContext } from 'react';

import Authcontext from 'context/AuthContext';

const Navbar = ({ isSticky, isMobile, handleCloseMenu }) => {
const router = useRouter()
const {clearSession} = useContext(Authcontext);

  return (
    <Box
      as="nav"
      sx={styles.navbar}
      className={`navbar${isMobile ? ' is-mobile' : ''}${
        isSticky ? ' is-sticky' : ''
      }`}
    >
 <div className={router.pathname == "/main" ? "active" : ""} > <Link href={'/main/'}  style={{ textDecoration: 'none' }}>Stores</Link> </div>
 <div className={router.pathname == "/main/employee" ? "active" : ""}> <Link href={'/main/employee'}  style={{ textDecoration: 'none' }}>Employee</Link> </div>
 <div className={router.pathname == "/main/reports" ? "active" : ""} > <Link href={'/main/reports'}  style={{ textDecoration: 'none' }}>Reports</Link> </div>
 <div className={router.pathname == "/main/profile" ? "active" : ""}> <Link href={'/main/profile'}  style={{ textDecoration: 'none' }}>Profile</Link> </div>
 <div > 
 <Link  href={'/'}  style={{ textDecoration: 'none' }}><div><a onClick={(e)=>{
     clearSession()
 }}><span className={'fa fa-sign-out'} ></span>Logout</a></div></Link>
</div>
    </Box>
  );
};

export default Navbar;

const styles = {
  navbar: {
    display: [null, null, null, null, null, 'flex'],
    alignItems: [null, null, null, 'center'],
    flexGrow: [null, null, null, 2],
    placeContent:'space-around',
    a: {
      color: 'white',
      cursor: 'pointer',
      textDecoration:'none',
      '+ a': {
        ml: [null, null, null, null, null, 6],
      },
    },
    div:{
        width: '100%',
        textAlign: 'center',
        pt:[1],
        pb:[1],
        borderRadius: '10px',
    },
    '.active': {
        background: 'whitesmoke',
        transformOrigin: 'top left 0',
        transition: '0.3s ease 0s',
        a:{
            color: '#2a0a4e',
            fontSize: 'larger',
            fontWeight: 'bold',
        }
    },
    '@media only screen and (max-width: 1259px)': {
      position: 'absolute',
      backgroundColor: 'white',
      boxShadow: '0px 11px 30px rgba(51, 83, 145, 0.07)',
      width: '100%',
      left: 0,
      top: 70,
      opacity: 0,
      visibility: 'hidden',
      transform: 'scaleY(0)',
      transformOrigin: 'top left 0',
      transition: '0.3s ease 0s',
      '&.is-sticky': {
        borderTop: '1px solid #f3f3f3',
      },
      '&.is-mobile': {
        opacity: 1,
        visibility: 'visible',
        transform: 'scaleY(1)',
      },
      a: {
        fontWeight: 500,
        lineHeight: 1,
        color: 'textSecondary',
        display: 'block',
        padding: 3,
        '+ a': {
          borderTop: '1px solid #f3f3f3',
        },
      },
    },
    '&.is-sticky': {
      top: 60,
      a: {
        color: 'text',
      },
      '.active': {
        color: 'primary',
      },
    },
  },
};

