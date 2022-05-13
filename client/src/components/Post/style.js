import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  post: {
    marginBottom: theme.spacing(5),
  },
  media: {
    height: 300,
    [theme.breakpoints.down('md')]: {
      height: 170,
    },
  },
}));

export default useStyles;
