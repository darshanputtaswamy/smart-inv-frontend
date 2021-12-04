import React, { Fragment } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LandingPage from 'sections/landing';

export default function WelcomePage() {
  return (
    <Fragment>
         <ToastContainer />
        <LandingPage />
    </Fragment>
  );
}

WelcomePage.requireAuth = true