import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import useStyles from './style';

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
