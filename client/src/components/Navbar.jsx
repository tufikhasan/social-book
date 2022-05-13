import React from 'react';
import { makeStyles, AppBar, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  logoLg: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },
  logoSm: {
    display: 'none',
    [theme.breakpoints.down('md')]: {
      display: 'block',
    },
  },
}));
const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6" className={classes.logoLg}>
          SocialBook
        </Typography>
        <Typography variant="h6" className={classes.logoSm}>
          SBook
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
