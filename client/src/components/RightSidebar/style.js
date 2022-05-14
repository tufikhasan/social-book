import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    position: 'sticky',
    top: 0,
  },
  title: {
    fontWeight: '600',
    marginBottom: theme.spacing(2),
  },
  links: {
    marginRight: theme.spacing(2),
    fontWeight: '600',
  },
}));

export default useStyles;
