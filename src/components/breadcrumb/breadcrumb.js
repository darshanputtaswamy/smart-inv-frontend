import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import MuiLink from '@mui/material/Link';
import Hidden from '@mui/material/Hidden';
import Icon from '@mui/material/Icon';
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
        flexDirection: 'column',
        marginBottom:'2px'
    }, 

    title:{
        margin: '0',
        fontWeight: '700',
        fontSize: '1.5rem',
        lineHeight: '1.5', 
        color: '#02073E',
        padding: '0px 10px'
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
    }
}))

export default function Breadcrumb({ routeSegments , currentRouteName }) {
    const classes = useStyles()

  return (
    <div className={classes.conatinerDiv}>
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
    <Breadcrumbs
        separator={<Icon className="text-hint">navigate_next</Icon>}
        className={classes.Breadcrumbs}
    >
        <MuiNextLink href={'/main'} noLinkStyle={true}>
                < StoreMallDirectoryIcon />
        </MuiNextLink>
        {routeSegments
            ? routeSegments.map((route, index) => {
                  return index !== routeSegments.length - 1 ? (
                      <MuiNextLink key={index} href={route.path} noLinkStyle={true}>
                          <span className="capitalize text-muted">
                              {route.name}
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
  );
}