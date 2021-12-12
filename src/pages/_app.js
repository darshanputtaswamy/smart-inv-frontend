/** Uncomment the below codeblock if you want to add google analytics for more info please visit our docs analytics section */
/** 
import { useEffect } from 'react';
import Router from 'next/router';
import { initGA, logPageView } from 'analytics';
*/
import '../assets/css/react-slick.css';
import {AuthProvider} from 'context/AuthContext';
import {AuthGuard} from 'context/AuthGuard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'nprogress/nprogress.css';
import { wrapper } from 'redux/reduxStore';
import Router from 'next/router'
import NProgress from 'nprogress'

NProgress.configure({ showSpinner: true });

Router.events.on('routeChangeStart', (url) => {
  console.log(`Loading: ${url}`)
  NProgress.start()
})

Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())


const  CustomApp = ({ Component, pageProps }) => {
  /** 
   useEffect(() => {
     initGA();
     logPageView();
     Router.events.on('routeChangeComplete', logPageView);
   }, []);
   */

  return (
  
      <>
          <AuthProvider>
            <ToastContainer />
            {Component.requireAuth ? (
                <AuthGuard>
                  <Component {...pageProps} />
                </AuthGuard>
              ) : (
                // public page
                <Component {...pageProps} />
            )}
          </AuthProvider>
          </>
  );
}

export default wrapper.withRedux(CustomApp)