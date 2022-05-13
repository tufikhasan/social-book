import React from 'react';
import { Container } from '@material-ui/core';
import useStyles from './style';

const RightSidebar = () => {
  const classes = useStyles();
  return <Container className={classes.container}>RightSidebar</Container>;
};

export default RightSidebar;
