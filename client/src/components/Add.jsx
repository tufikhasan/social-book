import React, { useState } from 'react';
import {
  Button,
  Container,
  Fab,
  makeStyles,
  Modal,
  TextField,
  Tooltip,
  Typography,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

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
  form: {
    padding: theme.spacing(2),
  },
  item: {
    marginBottom: theme.spacing(3),
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
          <form className={classes.form} autoComplete="off">
            <Typography variant="h4" color="secondary">
              Create a new post
            </Typography>
            <div className={classes.item}>
              <TextField label="Title" style={{ width: '100%' }} />
            </div>
            <div className={classes.item}>
              <TextField
                label="Description"
                multiline
                rows={4}
                variant="outlined"
                style={{ width: '100%' }}
              />
            </div>
            <div className={classes.item}>
              <TextField label="Tag" style={{ width: '100%' }} />
            </div>
            <div className={classes.item}>
              <input accept="image/*" className={classes.input} type="file" />
            </div>
            <div className={classes.item}>
              <Button
                variant="outlined"
                color="primary"
                style={{ marginRight: '1rem' }}
              >
                Create
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                style={{ cursor: 'pointer' }}
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Container>
      </Modal>
    </>
  );
};

export default Add;
