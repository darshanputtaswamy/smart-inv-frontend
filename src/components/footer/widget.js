/** @jsx jsx */ /** @jsxRuntime classic */
import { jsx, Box, Heading, Image } from 'theme-ui';
import { Link } from 'components/link';
import { rgba } from 'polished';
import { useMediaQuery } from 'react-responsive';
import { Fragment } from 'react';

const Widget = ({ title, items }) => {

  const isMobile = useMediaQuery({
    query: '(max-width: 1259px)',
  });
  return (
    <Box sx={styles.footerWidget}>
   
            <ul>
              {items.map(({ path, label, icon }, i) => (
              <li key={i}>
                {isMobile ? <Link  path={path} key={i}  variant="footer"><span className={icon}></span></Link> : 
                <Fragment>
                  <span className={icon}></span>
                  <Link  path={path} key={i} label={label} variant="footer"></Link>
                  </Fragment>
                
                }
                </li>
                ))}
              </ul>
          
    </Box>
  );
};

export default Widget;

const styles = {
  footerWidget: {
    ul: {
      listStyle: 'none',
      margin: '2px 0 0',
      padding: 0,
      display:'flex',
      placeContent: 'space-evenly',
      li: {
        display: 'flex',
        alignItems: 'center',
        img: {
          mr: '15px',
        },
      },
      a: {
        fontSize: '15px',
        color: rgba('#ffffff', 0.8),
        lineHeight: 2.5,
      },
      span:{
         paddingRight:'5px',
         color: rgba('#ffffff', 0.8),
         lineHeight: 2.5,
      }
    },
  },
};
