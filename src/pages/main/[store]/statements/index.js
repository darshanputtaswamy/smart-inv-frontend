import React, { Fragment } from 'react';
import Store from 'sections/Store';
import SEO from 'components/seo';
import Layout from 'components/layout';
export default function StatementPage() {
  return (
    <Layout>
    <SEO
        title="Startup hosting provider landing"
        description="Collection of free top of the line startup landing templates built using react/ next js. Free to download, simply edit and deploy! Updated weekly!"
      />  
        StatementPage
  </Layout>
  );
}

StatementPage.requireAuth = true