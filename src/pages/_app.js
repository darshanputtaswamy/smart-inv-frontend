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
import 'font-awesome/css/font-awesome.min.css';

export default function CustomApp({ Component, pageProps }) {
  /** 
   useEffect(() => {
     initGA();
     logPageView();
     Router.events.on('routeChangeComplete', logPageView);
   }, []);
   */

  return (<AuthProvider>
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
  );
}
