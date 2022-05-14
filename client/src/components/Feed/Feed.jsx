import React from 'react';
import { Container } from '@material-ui/core';
import useStyles from './style';
import Post from '../Post/Post';

const Feed = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Post
        authorImg="https://v4.mui.com/static/images/avatar/1.jpg"
        title="Mushroom is the cultivated white"
        date="May 14, 2022"
        desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"
        img="https://v4.mui.com/static/images/image-list/mushroom.jpg"
      />
      <Post
        authorImg="https://v4.mui.com/static/images/avatar/2.jpg"
        title="Plants are predominantly photosynthetic eukaryotes of the kingdom Plantae."
        date="Apr 09, 2022"
        desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"
        img="https://v4.mui.com/static/images/image-list/plant.jpg"
      />
      <Post
        authorImg="https://v4.mui.com/static/images/avatar/3.jpg"
        title="The olive, botanical name Olea europaea, meaning 'European olive',"
        date="Apr 05, 2022"
        desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"
        img="https://v4.mui.com/static/images/image-list/olive.jpg"
      />
      <Post
        authorImg="https://v4.mui.com/static/images/avatar/4.jpg"
        title="Starfish or sea stars are star-shaped echinoderms belonging to the class Asteroidea"
        date="Jan 25, 2022"
        desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"
        img="https://v4.mui.com/static/images/image-list/star.jpg"
      />
      <Post
        authorImg="https://v4.mui.com/static/images/avatar/5.jpg"
        title="A bicycle, also called a pedal cycle, bike or cycle"
        date="Dec 05, 2021"
        desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"
        img="https://v4.mui.com/static/images/image-list/bike.jpg"
      />
      <Post
        authorImg="https://v4.mui.com/static/images/avatar/6.jpg"
        title="Honey is a sweet, viscous food substance made by honey bees and some other bees"
        date="Sep 14, 2021"
        desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"
        img="https://v4.mui.com/static/images/image-list/honey.jpg"
      />
      <Post
        authorImg="https://v4.mui.com/static/images/avatar/7.jpg"
        title="Vegetables are parts of plants that are consumed by humans or other animals as food."
        date="Jun 05, 2021"
        desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"
        img="https://v4.mui.com/static/images/image-list/vegetables.jpg"
      />
    </Container>
  );
};

export default Feed;
