import React, { Fragment } from 'react';
import LandingPage from 'sections/landing';

export default function IndexPage() {
  return (
        <LandingPage />
  );
}

IndexPage.requireAuth = false