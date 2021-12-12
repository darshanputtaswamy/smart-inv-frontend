import React, { Fragment } from 'react';
import Employee from 'sections/employee';

export default function EmpoyleePage() {
  return (
        <Employee />
  );
}

EmpoyleePage.requireAuth = true