import { ThemeProvider,Box } from 'theme-ui';
import {
    jsx,
    Flex,
    Input,
    Label,
    Button,
    Heading,
    Container,
  } from 'theme-ui';

import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/landing/banner';

export default function Stores() {
    return (
      <ThemeProvider theme={theme}>
        <Layout>
          <SEO
            title="Startup hosting provider landing"
            description="Collection of free top of the line startup landing templates built using react/ next js. Free to download, simply edit and deploy! Updated weekly!"
          />  
        <Box as="section" id="navbackground" sx={styles.navbackground}>
        </Box>
     </Layout>
      </ThemeProvider>
    );
  }
  

  
const styles = {
    navbackground: {
      backgroundColor: 'primary',
      height:'80px'
    },
    section: {
        backgroundColor: 'secondary',
        pt: [17, null, null, 20, null],
        pb: [6, null, null, 12, 16],
        height:'1800px'

      },
  };
  