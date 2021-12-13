import React, { Fragment } from 'react';
import Store from 'sections/Store';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Breadcrumb  from 'components/breadcrumb/breadcrumb';
import Inventory from 'sections/inventory';

export default function InventoryPage() {
  return ( 
       <Layout>
       <SEO
           title="Startup hosting provider landing"
           description="Collection of free top of the line startup landing templates built using react/ next js. Free to download, simply edit and deploy! Updated weekly!"
         />  

         <Breadcrumb routeSegments={[{ name: 'Navarang Bar' , path:'/main/12'}, { name: 'Inventory' , path:'/main/12/inventory'} ]} currentRouteName={'Navarang Bar'} />
         
           <Inventory />
     </Layout>
  );
}

InventoryPage.requireAuth = true