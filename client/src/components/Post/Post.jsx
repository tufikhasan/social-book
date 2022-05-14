import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from '@material-ui/core';
import React from 'react';
import useStyles from './style';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';

const Post = (props) => {
  const { authorImg, title, desc, img, date } = props;
  const classes = useStyles();
  return (
    <Card className={classes.post}>
      <CardHeader
        avatar={<Avatar alt={title} src={authorImg} />}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
        subheader={date}
      />
      <CardActionArea>
        <CardMedia className={classes.media} image={img} title={title} />
        <CardContent>
          <Typography variant="body1" color="textSecondary" component="p">
            {desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <IconButton aria-label="add to favorites">
        <FavoriteIcon />
      </IconButton>
      <IconButton aria-label="share">
        <ShareIcon />
      </IconButton>
    </Card>
  );
};

export default Post;
