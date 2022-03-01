import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
      display: 'flex',
      height: '100vh',
      width: '100%',
      overflow: 'hidden',
  },
  leftSidebar: {
    backgroundColor: 'white',
    width: '25%',
  },
  divider: {
    height: '100% !important',
    width: 1,
    backgroundColor: '#ebebeb !important',
  },
  content: {
    flex: 1,
    overflowY: 'auto',
    backgroundColor: 'white',
  }
});

export default useStyles;