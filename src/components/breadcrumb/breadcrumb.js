import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import MuiLink from '@mui/material/Link';
import Hidden from '@mui/material/Hidden';
import Icon from '@mui/material/Icon';
import Paper from '@mui/material/Paper';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import { makeStyles } from '@mui/styles'
import MuiNextLink from 'components/MuiNextLink';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}


const useStyles = makeStyles(({ palette, ...theme }) => ({

    conatinerDiv: {
        display: 'flex',
        padding: '5px',
        background: '#ebebd9',
        flexDirection: 'row',
        marginBottom:'2px'
    }, 
    mainStore:{
        margin: 'auto 0px'
    },
    title:{
        margin: '0',
        color: '#02073E',
        fontSize: '1.2rem',
        lineHeight: '1.5',  
        fontWeight: '700',
        [theme.breakpoints.between('xs', 'md')]: {
            fontSize: '1rem',
            padding: '5px 10px'
        },
        padding: '0px 10px',
        margin: 'auto 0px'
    },
    titleSeperator:{
        margin: '0',
        fontWeight: '700',
        fontSize: '1.5rem',
        lineHeight: '1.5', 
        color: '#02073E',
        padding: '0px 10px'
    },
    Breadcrumbs:{
        margin: '0',  
        padding: '7px 5px'
    },
    separator:{
        fontSize: 'xx-large'
    }
}))

export default function Breadcrumb({ routeSegments , currentRouteName }) {
    const classes = useStyles()

  return (
    <>
    <Paper elevation={8} >
    <div className={classes.conatinerDiv}>
        <div className={classes.mainStore}>
    <MuiNextLink  href={'/main'} noLinkStyle={true}>
            < StoreMallDirectoryIcon />
    </MuiNextLink>
    </div>
    <div className={classes.separator}>|</div>
    {currentRouteName ? (
        <Hidden xsDown>
            <h4 className={classes.title}>
                {currentRouteName}
            </h4>
        </Hidden>
    ) :  routeSegments ? (
        <Hidden xsDown>
            <h4 className={classes.title}>
                {[routeSegments.length - 1]['name']}
            </h4>
        </Hidden>
    ) : null}
    </div>
    </Paper>
    { routeSegments && routeSegments.length > 0 && 
<Paper elevation={8} >
<div className={classes.conatinerDiv}>
<Breadcrumbs
    separator={<Icon className="text-hint">navigate_next</Icon>}
    className={classes.Breadcrumbs}
>
    {routeSegments
        ? routeSegments.map((route, index) => {
              return index !== routeSegments.length - 1 ? (
               
                  <MuiNextLink key={index} href={route.path} noLinkStyle={true}>
                      <span className="capitalize text-muted">
                      { route.iconOnly ? route.icon : route.icon ? `${route.icon} - ${route.name}`: route.name}
                      </span>
                  </MuiNextLink>
              ) : (
                  <span
                      key={index}
                      className="capitalize text-muted"
                  >
                      {route.name}
                  </span>
              )
          })
        : null}
</Breadcrumbs>

</div>
</Paper>
}
</>
  );
}