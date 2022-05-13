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
import SearchIcon from '@material-ui/icons/Search';
import Mail from '@material-ui/icons/Mail';
import Notifications from '@material-ui/icons/Notifications';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles({ open });
  return (
    <AppBar>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.logoLg}>
          SocialBook
        </Typography>
        <Typography variant="h6" className={classes.logoSm}>
          SBook
        </Typography>
        <div className={classes.search}>
          <SearchIcon />
          <InputBase placeholder="Search…" className={classes.input} />
        </div>
        <div className={classes.icons}>
          <SearchIcon
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
