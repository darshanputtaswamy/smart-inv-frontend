import React, { Fragment } from 'react';
import Employee from 'sections/employee';

export default function MainPage() {
  return (
        <Employee />
  );
}

MainPage.requireAuth = true