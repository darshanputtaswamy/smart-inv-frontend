/*import '../assets/css/react-slick.css';
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

 console.log(AuthProvider);
  console.log("working.....................");
  return (
  
      <>
          <AuthProvider>
            <h2 > Working</h2>
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
*/

// import App from 'next/app'

import '../assets/css/react-slick.css';
import {AuthProvider} from 'context/AuthContext';
import {AuthGuard} from 'context/AuthGuard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import 'nprogress/nprogress.css';
import { wrapper } from 'redux/reduxStore';
import Router from 'next/router'
/*import NProgress from 'nprogress'

NProgress.configure({ showSpinner: true });

Router.events.on('routeChangeStart', (url) => {
  console.log(`Loading: ${url}`)
  NProgress.start()
})

Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())
*/
function MyApp({ Component, pageProps }) {

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

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }
export default wrapper.withRedux(MyApp)