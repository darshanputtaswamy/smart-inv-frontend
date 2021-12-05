import React, { Fragment } from 'react';
import Profile from 'sections/profile';

export default function MainPage() {
  return (
        <Profile/>
  );
}

MainPage.requireAuth = true