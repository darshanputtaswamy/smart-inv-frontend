
import React, { Fragment,useContext, useMemo } from 'react';
import WelcomeHeader from './header-welcome';
import WelcomeFooter from './footer-welcome';
import Header from './header/header';
import Footer from './footer/footer';
import Authcontext from 'context/AuthContext';
import { useRouter } from "next/router"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import {useAxiosLoader} from '/api.js'
import Conatiner from '@mui/material/Container';

export default function Layout({ children }) {
  const [loading] = useAxiosLoader();

  const {sessionUser} = useContext(Authcontext);
  const router = useRouter();

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          primary:{
            main:'#2a0a4e',
          },

        },
        typography:{
          fontFamily:'"Roboto", "Helvetica", "Arial", "sans-serif"'
        }
      }),
   );
 

  return (
    <Fragment>
    {(router.route === '/') && (
        <Fragment>
        <WelcomeHeader/>
        <main>
          {children}
        </main>
        <WelcomeFooter />
        </Fragment>
    )}
      {(router.route != '/') && (
    <ThemeProvider theme={theme}>
        <Header/>
        <main >
        <Conatiner maxWidth={false}>

        {loading > 0 && <Box sx={{ display: 'flex' }}>
          <LinearProgress color="success" size={'5rem'} />
        </Box>
        }
          {children}
        </Conatiner>
        </main>
        { (router.route.indexOf('/main/[store]') > -1 ) && ( <Footer />)}
      </ThemeProvider>
    )} 
  </Fragment>
  );
}
