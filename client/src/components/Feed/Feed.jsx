import React from 'react';
import { Container } from '@material-ui/core';
import useStyles from './style';

const Feed = () => {
  const classes = useStyles();
  return <Container className={classes.container}>Feed</Container>;
};

export default Feed;
