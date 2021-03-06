import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useLocation } from 'react-router-dom';
// import SearchField from './components/SearchField';
import GithubButton from './components/GithubButton';
import BackButton from './components/BackButton';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    display: 'block',
  },
  actions: {
    display: 'flex',
    position: 'relative',
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const AppToolbar = () => {
  const classes = useStyles();
  const { pathname } = useLocation();
  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          {(pathname !== '/') && <BackButton />}
          <Typography className={classes.title} variant="h6" noWrap>
            Punjabi Classics
          </Typography>
          <div className={classes.actions}>
            {/* <SearchField /> */}
            <GithubButton />
          </div>
        </Toolbar>
      </AppBar>
      {/* Empty <Toolbar> to give appropriate vertical padding since actual <AppBar> is fixed position */}
      <Toolbar />
    </div>
  );
};

export default AppToolbar;
