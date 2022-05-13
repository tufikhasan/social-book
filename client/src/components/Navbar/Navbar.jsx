import React from 'react';
import useStyles from './style';
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Avatar,
} from '@material-ui/core';
import Badge from '@material-ui/core/Badge';
import SearchIcon from '@material-ui/icons/Search';
import Mail from '@material-ui/icons/Mail';
import Notifications from '@material-ui/icons/Notifications';

const Navbar = () => {
  const classes = useStyles();
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
          <Badge badgeContent={4} color="secondary" className={classes.badge}>
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="secondary" className={classes.badge}>
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
