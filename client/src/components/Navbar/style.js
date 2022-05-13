import { makeStyles, alpha } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  logoLg: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  logoSm: {
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
    marginRight: theme.spacing(1),
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  search: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(1),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
    paddingLeft: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      display: (props) => (props.open ? 'flex' : 'none'),
    },
  },
  input: {
    color: 'white',
  },
  icons: {
    alignItems: 'center',
    cursor: 'pointer',
    display: (props) => (props.open ? 'none' : 'flex'),
  },
  searchButton: {
    marginRight: theme.spacing(1),
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  badge: {
    marginRight: theme.spacing(1),
  },
}));

export default useStyles;
