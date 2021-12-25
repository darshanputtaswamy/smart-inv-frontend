import React, { useEffect } from 'react';
import Store from 'sections/storeDetails';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Breadcrumb  from 'components/breadcrumb/breadcrumb';
import Satement from 'sections/statements';
import {
  getLobDetails
} from 'redux/actions/LobActions'
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router'; 
import Paper from '@mui/material/Paper';


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
         <Breadcrumb routeSegments={[{ name: lobDetails.bname , path:`/main/${store}`}, { name: 'Registry' , path:`/main/${store}/statements`} , { name: 'Statement' , path:`/main/${store}/statements/${id}`} ]} currentRouteName={lobDetails.bname} />
         <Paper sx={{marginTop:'5px', padding:'10px', minHeight:'80vh', overflow:'scroll'}} elevation={8} >
            <Satement lobDetails={lobDetails} />
         </Paper>
   </Layout>
  );
}

StatementPage.requireAuth = true