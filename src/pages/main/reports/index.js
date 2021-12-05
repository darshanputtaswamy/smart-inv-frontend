import React, { Fragment } from 'react';
import Report from 'sections/report';

export default function MainPage() {
  return (
        <Report />
  );
}

MainPage.requireAuth = true