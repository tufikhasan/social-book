import React from 'react';
import { Container, Typography } from '@material-ui/core';
import useStyles from './style';
import Home from '@material-ui/icons/Home';

const SideBar = () => {
  const classes = useStyles();
  return (
    <Container>
      <div className={classes.item}>
        <Home className={classes.icon} />
        <Typography variant="h6" className={classes.text}>
          Home
        </Typography>
      </div>
      <div className={classes.item}>
        <Home className={classes.icon} />
        <Typography variant="h6" className={classes.text}>
          Home
        </Typography>
      </div>
    </Container>
  );
};

export default SideBar;
