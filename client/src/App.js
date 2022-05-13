import React from 'react';
import { Feed, Navbar, RightSidebar, SideBar } from './components';
import { Box, Grid } from '@material-ui/core';

const App = () => {
  return (
    <Box>
      <Navbar />
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
    </Box>
  );
};

export default App;
