/** @jsx jsx */ /** @jsxRuntime classic */ /** @jsxRuntime classic */ 
import { jsx } from 'theme-ui';
import { Fragment,useContext } from 'react';
import WelcomeHeader from './header-welcome/header';
import WelcomeFooter from './footer-welcome/footer';
import Header from './header/header';
import Footer from './footer/footer';
import Authcontext from 'context/AuthContext';
import { useRouter } from "next/router"


export default function Layout({ children }) {

  const {sessionUser} = useContext(Authcontext);
  const router = useRouter();

  console.log(router);

  return (
    <Fragment>
      {(router.route === '/') ? <WelcomeHeader />:<Header />}
      <main
        sx={{
          variant: 'layout.main',
        }}
      >
        {children}
      </main>
      {(router.route === '/') ? <WelcomeFooter /> : null }
      {(router.route === '/main') ? <Footer /> : null }
    </Fragment>
  );
}
