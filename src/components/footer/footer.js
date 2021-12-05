/** @jsx jsx */ /** @jsxRuntime classic */ /** @jsxRuntime classic */ 
import { jsx, Box, Text, Container } from 'theme-ui';
import { rgba } from 'polished';
import Logo from 'components/icons/logo';
import { Link } from 'components/link';
import Widget from './widget';
import { menuItems } from './footer.data';
import { Fragment ,useState } from 'react';

export default function WelcomeFooter() {


 
  return (
    <Fragment>
      <Box as="footer" sx={styles.footer}>
            {menuItems.map(({ id, items }) => (
              <Widget key={id} items={items} />
            ))}
      </Box>
    </Fragment>
  );
}

const styles = {
  footer: {
    backgroundColor: '#2a0a4e',
    position:'fixed',
    bottom:0,
    width: '100%',
    height: '60px',
  },
};
