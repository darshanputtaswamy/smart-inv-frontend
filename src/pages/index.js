import React, { Fragment } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LandingPage from 'sections/landing';

export default function IndexPage() {
  return (
    <Fragment>
         <ToastContainer />
        <LandingPage />
    </Fragment>
  );
}

IndexPage.requireAuth = false