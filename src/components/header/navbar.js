import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import MuiNextLink from "components/MuiNextLink";
import { Fragment ,useState } from 'react';

const Navbar = ({ navLinks }) => {



  return (
    <Toolbar
      component="nav"
      sx={{
        display: { xs: `none`, sm: `none`, md: `none`, lg:`flex` , xl:`flex`},
      }}
    >
      <Stack direction="row" spacing={4}>
        {navLinks.map(({ title, path }, i) => (
          <MuiNextLink
            key={`${title}${i}`}
            href={path}
            variant="button"
            onClick={navLinks.onClick}
            sx={{ color: `white`, opacity: 1, textDecoration: 'none' , borderRadius:'2px', padding: '2px 25px 2px 25px', '&:hover': {
              cursor: 'pointer',
              backgroundColor: 'white',
              color:'black',
              padding: '2px 25px 2px 25px',
              borderRadius:'2px',
            }}}
          >
            {title}
          </MuiNextLink>
        ))}
      </Stack>
    </Toolbar>
  );
};

export default Navbar;

