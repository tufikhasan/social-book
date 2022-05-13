import React from 'react';
import { Container, Typography } from '@material-ui/core';
import useStyles from './style';
import Home from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const SideBar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <div className={classes.item}>
        <Home className={classes.icon} />
        <Typography className={classes.text}>Home</Typography>
      </div>
      <div className={classes.item}>
        <PersonIcon className={classes.icon} />
        <Typography className={classes.text}>Friends</Typography>
      </div>
      <div className={classes.item}>
        <FormatListBulletedIcon className={classes.icon} />
        <Typography className={classes.text}>Lists</Typography>
      </div>
      <div className={classes.item}>
        <CameraAltIcon className={classes.icon} />
        <Typography className={classes.text}>Camera</Typography>
      </div>
      <div className={classes.item}>
        <PlayCircleOutlineIcon className={classes.icon} />
        <Typography className={classes.text}>Video</Typography>
      </div>
      <div className={classes.item}>
        <PhoneAndroidIcon className={classes.icon} />
        <Typography className={classes.text}>Apps</Typography>
      </div>
      <div className={classes.item}>
        <BookmarkIcon className={classes.icon} />
        <Typography className={classes.text}>Collections</Typography>
      </div>
      <div className={classes.item}>
        <StorefrontIcon className={classes.icon} />
        <Typography className={classes.text}>Marktet Place</Typography>
      </div>
      <div className={classes.item}>
        <SettingsIcon className={classes.icon} />
        <Typography className={classes.text}>Settings</Typography>
      </div>
      <div className={classes.item}>
        <ExitToAppIcon className={classes.icon} />
        <Typography className={classes.text}>Logout</Typography>
      </div>
    </Container>
  );
};

export default SideBar;
