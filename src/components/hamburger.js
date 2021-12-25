import { Typography } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Button } from '@mui/material';
 

export default function HamburgerMenu({ isOpen, isSticky, toggleMobileMenu, ...props }){
  return (
    <Button
      sx={styles.menuButton}
      onClick={toggleMobileMenu}
      className={isOpen ? 'open' : ''}
      {...props}
    >   <MenuRoundedIcon />
    </Button>
  );
};
 

const styles = {
    menuButton: {
      backgroundColor: 'transparent',
      color:'white',
      border: 0,
      padding: 0,
      width: 20,
      height: 14,
      position: 'relative',
      transform: 'rotate(0deg)',
      transition: '.5s ease-in-out',
      cursor: 'pointer',
      outline: 0,
    }
};
