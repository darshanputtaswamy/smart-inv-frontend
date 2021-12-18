import React, { Fragment } from 'react';
import Employee from 'sections/employee';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Breadcrumb  from 'components/breadcrumb/breadcrumb';
import Paper from '@mui/material/Paper';

export default function EmpoyleePage() {
  return (
    <Layout>
        <SEO
            title="Startup hosting provider landing"
            description="Collection of free top of the line startup landing templates built using react/ next js. Free to download, simply edit and deploy! Updated weekly!"
          />  
          <Breadcrumb  currentRouteName={'Employee'} />
          <Paper sx={{marginTop:'5px', padding:'10px', minHeight:'80vh'}} elevation={8} >

         <Employee />
         </Paper>
    </Layout>
  );
}

EmpoyleePage.requireAuth = true