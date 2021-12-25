import { Fragment, useState } from 'react';
import Sticky from 'react-stickynode';
import Navbar from './navbar';
import {Box, Flex, Container, Button } from '@mui/material';
import Logo from 'components/logo';
import HamburgerMenu from 'components/hamburger';
 


export default function WelcomeHeader() {

    const [state, setState] = useState({
        isMobileMenu: false,
        isSticky: false,
      });
      const handleStateChange = (status) => {
        status.status === Sticky.STATUS_FIXED
          ? setState({ ...state, isSticky: true })
          : setState({ ...state, isSticky: false });
      };
      const toggleMobileMenu = () => {
        setState((prev) => {
          return {
            ...prev,
            isMobileMenu: !prev.isMobileMenu,
          };
        });
      };
      const handleCloseMenu = () => {
        setState({
          ...state,
          isMobileMenu: false,
        });
      };

      

    return (
        <Fragment>
          <Sticky
            enabled={true}
            top={0}
            activeClass="is-sticky"
            innerZ={90}
            onStateChange={handleStateChange}
          >
            <Box
              as="header"
              sx={styles.header}
              className={state.isSticky ? 'is-sticky' : ''}
            >
              <Container maxWidth={false} sx={styles.container}>
                <Logo sx={styles.logo} isSticky={state.isSticky} />
                <Navbar
                  isSticky={state.isSticky}
                  isMobile={state.isMobileMenu}
                  handleCloseMenu={handleCloseMenu}
                />
                   <HamburgerMenu
                    sx={styles.hamburger}
                    isSticky={state.isSticky}
                    isOpen={state.isMobileMenu}
                    toggleMobileMenu={toggleMobileMenu}
                  />
              </Container>
            </Box>
          </Sticky>
        </Fragment>
      );
}

  
  
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
    mr: {xs:null, sm:null, md:null, lg:null, xl:6},
  },
  
  
  hamburger: {
    display: {xs:null, sm:null, md:null, lg:null, xl:'none'},
  },
};
