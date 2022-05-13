import React from 'react';
import { Fab, makeStyles, Tooltip } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  positioning: {
    position: 'fixed',
    bottom: 20,
    right: 20,
  },
}));

const Add = () => {
  const classes = useStyles();
  return (
    <>
      <Tooltip title="Add memories" aria-label="add">
        <Fab color="primary" className={classes.positioning}>
          <AddIcon />
        </Fab>
      </Tooltip>
    </>
  );
};

export default Add;
