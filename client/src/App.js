import React from 'react';
import { Feed, Navbar, RightSidebar, SideBar } from './components';
import { makeStyles, Box, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));
const App = () => {
  const classes = useStyles();
  return (
    <Box>
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
    </Box>
  );
};

export default App;
