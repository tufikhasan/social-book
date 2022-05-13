import React from 'react';
import { Feed, Navbar, RightSidebar, SideBar } from './components';
import { Box } from '@material-ui/core';

const App = () => {
  return (
    <Box>
      <Navbar />
      <SideBar />
      <Feed />
      <RightSidebar />
    </Box>
  );
};

export default App;
