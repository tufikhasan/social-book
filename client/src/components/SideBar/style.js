import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    height: '100vh',
    paddingTop: theme.spacing(10),
    backgroundColor: 'white',
    color: '#555',
    borderRight: '1px solid #ece7e7',
    [theme.breakpoints.down('sm')]: {
      backgroundColor: theme.palette.primary.main,
      color: 'white',
    },
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(3),
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },
  text: {
    fontWeight: '500',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  icon: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      fontSize: '18px',
    },
  },
}));

export default useStyles;
