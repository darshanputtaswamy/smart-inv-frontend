import React, { Fragment } from 'react';
import Store from 'sections/Store';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Breadcrumb  from 'components/breadcrumb/breadcrumb';

export default function SubscriptionPage() {
  return (
    <Layout>
    <SEO
        title="Startup hosting provider landing"
        description="Collection of free top of the line startup landing templates built using react/ next js. Free to download, simply edit and deploy! Updated weekly!"
      />  
         <Breadcrumb routeSegments={[{ name: 'Navarang Bar' , path:'/main/12'}, { name: 'Subscription' , path:'/main/12/subscripion'} ]} currentRouteName={'Navarang Bar'} />
        SubscriptionPage
  </Layout>
  );
}

SubscriptionPage.requireAuth = true