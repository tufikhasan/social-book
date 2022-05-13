import React, { useState } from 'react';
import { Container, Fab, makeStyles, Modal, Tooltip } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ClearIcon from '@material-ui/icons/Clear';

const useStyles = makeStyles((theme) => ({
  positioning: {
    position: 'fixed',
    bottom: 20,
    right: 20,
  },
  container: {
    width: 500,
    height: 550,
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    margin: 'auto',
    backgroundColor: 'white',
    [theme.breakpoints.down('sm')]: {
      width: '100vw',
      height: '100vh',
    },
  },
  clear: {
    cursor: 'pointer',
  },
}));

const Add = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip title="Add memories" aria-label="add">
        <Fab color="primary" className={classes.positioning}>
          <AddIcon onClick={() => setOpen(true)} />
        </Fab>
      </Tooltip>
      <Modal open={open}>
        <Container className={classes.container}>
          <ClearIcon onClick={() => setOpen(false)} className={classes.clear} />
          My modal
        </Container>
      </Modal>
    </>
  );
};

export default Add;
