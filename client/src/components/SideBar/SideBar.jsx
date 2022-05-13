import React from 'react';
import { Container, Typography } from '@material-ui/core';
import useStyles from './style';
import Home from '@material-ui/icons/Home';

const SideBar = () => {
  const classes = useStyles();
  return (
    <Container>
      <div className={classes.item}>
        <Home />
        <Typography variant="h6">Home</Typography>
      </div>
      <div className={classes.item}>
        <Home />
        <Typography variant="h6">Home</Typography>
      </div>
      <div className={classes.item}>
        <Home />
        <Typography variant="h6">Home</Typography>
      </div>
      <div className={classes.item}>
        <Home />
        <Typography variant="h6">Home</Typography>
      </div>
      <div className={classes.item}>
        <Home />
        <Typography variant="h6">Home</Typography>
      </div>
      <div className={classes.item}>
        <Home />
        <Typography variant="h6">Home</Typography>
      </div>
    </Container>
  );
};

export default SideBar;
