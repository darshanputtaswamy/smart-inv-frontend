/** @jsx jsx */ /** @jsxRuntime classic */ /** @jsxRuntime classic */ 
import { jsx } from 'theme-ui';
import { Fragment,useContext } from 'react';
import WelcomeHeader from './header-welcome/header';
import WelcomeFooter from './footer-welcome/footer';
import Header from './header/header';
import Footer from './footer/footer';
import Authcontext from 'context/AuthContext';
import { useRouter } from "next/router"
import * as React from 'react';
import Conatiner from '@mui/material/Container';

import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Main from 'sections/main';


export default function Layout({ children }) {

  const {sessionUser} = useContext(Authcontext);
  const router = useRouter();
/*
    --theme-ui-colors-text: #343D48;
    --theme-ui-colors-textSecondary: #02073E;
    
    --theme-ui-colors-heading: #0F2137;
    --theme-ui-colors-headingSecondary: #343D48;
    
    --theme-ui-colors-background: #FFFFFF;
    --theme-ui-colors-backgroundSecondary: #F9FAFC;
    
    --theme-ui-colors-borderColor: #EDEFF6;

    --theme-ui-colors-primary: #2a0a4e;
    --theme-ui-colors-secondary: #FFC059;
    --theme-ui-colors-muted: #7B8188;
    --theme-ui-colors-accent: #609;
    --theme-ui-colors-dark: #10132D;
    --theme-ui-colors-link: #3183FF;
    
    color: var(--theme-ui-colors-text);
    background-color: var(--theme-ui-colors-background);

*/
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          primary:{
            main:'#2a0a4e',
          },
          secondary: {
            main:'#c6acc9',
          },
          text:{
            primary:'#343D48',
            secondary:'#02073E',

          },
          background:{
            paper:'#F9FAFC',
            default:'#FFFFFF',
          },
          
        },
        typography:{
          fontFamily:'"Bree Serif","Roboto", "Helvetica", "Arial", "sans-serif"'
        }
      }),
    [prefersDarkMode],
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
          <Fragment>
          <Header/>
          <main>
          <Conatiner maxWidth={false}>
            {children}
          </Conatiner>
          </main>
          { (router.route.indexOf('/main/[store]') > -1 ) && ( <Footer />)}
          </Fragment>
        </ThemeProvider>
      )} 
    </Fragment>
  );
}
