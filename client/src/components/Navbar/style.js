import { makeStyles, alpha } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  logoLg: {
    display: 'none',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
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
    marginLeft: 0,
    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing(1),
      width: '50%',
    },
    paddingLeft: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      display: (props) => (props.open ? 'flex' : 'none'),
      width: 'auto',
    },
  },
  input: {
    color: 'white',
  },
  icons: {
    alignItems: 'center',
    display: (props) => (props.open ? 'none' : 'flex'),
  },
  searchButton: {
    marginRight: theme.spacing(1),
    cursor: 'Pointer',
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  badge: {
    marginRight: theme.spacing(1),
  },
  cancel: {
    cursor: 'pointer',
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
}));

export default useStyles;
