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
            sx={{ color: `white`, opacity: 1 }}
          >
            {title}
          </MuiNextLink>
        ))}
      </Stack>
    </Toolbar>
  );
};

export default Navbar;



  
const styles = {
  
  logo: {
    mr: [null, null, null, null, 6, null, 12],
  },
   
};
