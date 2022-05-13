import React from 'react';
import { Feed, Navbar, RightSidebar, SideBar } from './components';
import { makeStyles, Box, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(10),
  },
}));
const App = () => {
  const classes = useStyles();
  return (
    <Box>
      <Navbar />
      <div className={classes.container}>
        <Grid container>
          <Grid item sm={3}>
            <SideBar />
          </Grid>
          <Grid item sm={6}>
            <Feed />
          </Grid>
          <Grid item sm={3}>
            <RightSidebar />
          </Grid>
        </Grid>
      </div>
    </Box>
  );
};

export default App;
