import React, { useEffect } from 'react';
import Store from 'sections/storeDetails';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Breadcrumb  from 'components/breadcrumb/breadcrumb';
import Statement from 'sections/statement';
import {
  getLobDetails
} from 'redux/actions/LobActions'
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router'; 


export default function StatementPage() {
  const { lobDetails = {} } = useSelector((state) => state.lob)
  const dispatch = useDispatch();
  const router = useRouter();
  const { store, id } = router.query; 
  useEffect(() => {
    dispatch(getLobDetails(store)) 
}, [dispatch])


  return (
    
    <Layout>
    <SEO
        title="Startup hosting provider landing"
        description="Collection of free top of the line startup landing templates built using react/ next js. Free to download, simply edit and deploy! Updated weekly!"
      />  
         <Breadcrumb routeSegments={[{ name: lobDetails.bname , path:`/main/${store}`}, { name: 'Statement' , path:`/main/${store}/statement/${id}`} ]} currentRouteName={lobDetails.bname} />

         Statement
 
   </Layout>
  );
}

StatementPage.requireAuth = true