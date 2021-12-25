import SEO from 'components/seo';
import Layout from 'components/layout';  

import React, { Fragment } from 'react';
import LandingPage from 'sections/landing';

export default function IndexPage() {
  return (
    <Layout>
    <SEO  />
    <LandingPage />
    </Layout>
  );
}

IndexPage.requireAuth = false