import React from 'react';
import {
  Avatar,
  Container,
  Divider,
  ImageList,
  ImageListItem,
  Link,
  Typography,
} from '@material-ui/core';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import useStyles from './style';

const RightSidebar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Typography
        variant="body1"
        color="textSecondary"
        className={classes.title}
      >
        Your online Friends
      </Typography>
      <AvatarGroup max={4} style={{ marginBottom: '1rem' }}>
        <Avatar
          alt="Remy Sharp"
          src="https://v4.mui.com/static/images/avatar/1.jpg"
        />
        <Avatar
          alt="Travis Howard"
          src="https://v4.mui.com//static/images/avatar/2.jpg"
        />
        <Avatar
          alt="Cindy Baker"
          src="https://v4.mui.com//static/images/avatar/3.jpg"
        />
        <Avatar
          alt="Agnes Walker"
          src="https://v4.mui.com//static/images/avatar/4.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://v4.mui.com//static/images/avatar/5.jpg"
        />
      </AvatarGroup>
      <Typography
        variant="body1"
        color="textSecondary"
        className={classes.title}
      >
        Photos Gallery
      </Typography>
      <ImageList rowHeight={100} cols={3} style={{ marginBottom: '1rem' }}>
        <ImageListItem>
          <img
            src="https://v4.mui.com/static/images/image-list/honey.jpg"
            alt="honey"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://v4.mui.com/static/images/image-list/vegetables.jpg"
            alt="vegetables"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://v4.mui.com/static/images/image-list/plant.jpg"
            alt="plant "
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://v4.mui.com/static/images/image-list/honey.jpg"
            alt="Title"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://v4.mui.com/static/images/image-list/mushroom.jpg"
            alt="mushroom"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://v4.mui.com/static/images/image-list/olive.jpg"
            alt="olive"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://v4.mui.com/static/images/image-list/star.jpg"
            alt="star"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://v4.mui.com/static/images/image-list/bike.jpg"
            alt="bike"
          />
        </ImageListItem>
      </ImageList>
      <Typography
        variant="body1"
        color="textSecondary"
        className={classes.title}
      >
        Tags
      </Typography>
      <Link
        className={classes.links}
        target="_blank"
        href="https://tufik.netlify.app/"
        color="secondary"
      >
        Portfolio
      </Link>
      <Link
        className={classes.links}
        target="_blank"
        href="https://www.facebook.com/ami.toufiq"
        color="secondary"
      >
        Facebook
      </Link>
      <Link
        className={classes.links}
        target="_blank"
        href="https://github.com/tufikhasan"
        color="secondary"
      >
        Github
      </Link>
      <Divider flexItem style={{ marginBottom: '1rem' }} />
      <Link
        className={classes.links}
        target="_blank"
        href="https://twitter.com/tufik_hasan"
        color="secondary"
      >
        Twitter
      </Link>
    </Container>
  );
};

export default RightSidebar;
