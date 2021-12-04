import React, { Fragment } from 'react';

export default function DashbaordPage() {
  return (
    <Fragment>
       <div>Protected</div>
    </Fragment>
  );
}

DashbaordPage.requireAuth = true