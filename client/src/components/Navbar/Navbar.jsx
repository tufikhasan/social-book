import React, { useState } from 'react';
import useStyles from './style';
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Badge,
  Avatar,
} from '@material-ui/core';
import Search from '@material-ui/icons/Search';
import Cancel from '@material-ui/icons/Cancel';
import Mail from '@material-ui/icons/Mail';
import Notifications from '@material-ui/icons/Notifications';
import LinkedCameraIcon from '@material-ui/icons/LinkedCamera';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles({ open });
  return (
    <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.logoLg}>
          Memories <LinkedCameraIcon style={{ marginLeft: '10px' }} />
        </Typography>
        <Typography variant="h6" className={classes.logoSm}>
          Memories
        </Typography>
        <div className={classes.search}>
          <Search />
          <InputBase placeholder="Search…" className={classes.input} />
          <Cancel className={classes.cancel} onClick={() => setOpen(false)} />
        </div>
        <div className={classes.icons}>
          <Search
            className={classes.searchButton}
            onClick={() => setOpen(true)}
          />
          <Badge
            badgeContent={4}
            color="secondary"
            className={classes.badge}
            overlap="rectangular"
          >
            <Mail />
          </Badge>
          <Badge
            badgeContent={4}
            color="secondary"
            className={classes.badge}
            overlap="rectangular"
          >
            <Notifications />
          </Badge>
          <Avatar
            alt="Remy Sharp"
            src="https://previews.123rf.com/images/yupiramos/yupiramos1712/yupiramos171217688/92110199-elegant-businessman-avatar-character-vector-illustration-design.jpg"
          />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
