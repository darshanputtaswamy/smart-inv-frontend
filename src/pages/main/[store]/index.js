import React, { Fragment } from 'react';
import Store from 'sections/Store';

export default function StorePage() {
  return (
        <Store />
  );
}

StorePage.requireAuth = false