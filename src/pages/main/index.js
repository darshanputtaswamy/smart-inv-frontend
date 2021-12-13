import React, { Fragment } from 'react';
import Main from 'sections/main';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Breadcrumb  from 'components/breadcrumb/breadcrumb';

export default function MainPage() {
  return (
       
    <Layout>
    <SEO
        title="Startup hosting provider landing"
        description="Collection of free top of the line startup landing templates built using react/ next js. Free to download, simply edit and deploy! Updated weekly!"
      /> 
      <Breadcrumb currentRouteName={'Stores'} />
        <Main /> 
</Layout>
      
  );
}

MainPage.requireAuth = true