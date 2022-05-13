import React from 'react';
import { Feed, Navbar, RightSidebar, SideBar } from './components';
import { makeStyles, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  right: {
    display: 'block',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));
const App = () => {
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <Grid container>
        <Grid item sm={2} xs={2}>
          <SideBar />
        </Grid>
        <Grid item sm={7} xs={10}>
          <Feed />
        </Grid>
        <Grid item sm={3} className={classes.right}>
          <RightSidebar />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
