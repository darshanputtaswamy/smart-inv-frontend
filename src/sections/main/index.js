import SEO from 'components/seo';
import Layout from 'components/layout';
import StoreCard from './StoreCard';
import { Container } from '@mui/material';

export default function Main() {
 
    return (
        <Layout>
        <SEO
            title="Startup hosting provider landing"
            description="Collection of free top of the line startup landing templates built using react/ next js. Free to download, simply edit and deploy! Updated weekly!"
          />  
             <StoreCard />
      </Layout>
    );
  }
 