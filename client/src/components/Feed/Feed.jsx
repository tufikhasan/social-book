import React from 'react';
import { Container } from '@material-ui/core';
import useStyles from './style';
import Post from '../Post/Post';

const Feed = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Container>
  );
};

export default Feed;
