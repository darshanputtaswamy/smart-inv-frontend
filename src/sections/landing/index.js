import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/landing/banner';
import Services from 'sections/landing/services';
import PremiumFeature from 'sections/landing/premium-feature';
import UltimateFeatures from 'sections/landing/ultimate-feature';
import CustomerSupport from 'sections/landing/customer-support';
import Pricing from 'sections/landing/pricing';
import Testimonials from 'sections/landing/testimonials';
import Blog from 'sections/landing/blog';
import Faq from 'sections/landing/faq';
import Support from 'sections/landing/support';
import Authcontext from 'context/AuthContext';
import {useContext,useEffect} from 'react';

export default function LandingPage() {


    return (
      <ThemeProvider theme={theme}>
        <Layout>
          <SEO
            title="Startup hosting provider landing"
            description="Collection of free top of the line startup landing templates built using react/ next js. Free to download, simply edit and deploy! Updated weekly!"
          />
          <Banner />
          <Services />
          <PremiumFeature />
          <UltimateFeatures />
          <CustomerSupport />
          <Pricing />
          <Testimonials />
          <Blog />
          <Faq />
          <Support />
        </Layout>
      </ThemeProvider>
    );
  }
  