import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import SearchField from './components/SearchField';
import GithubButton from './components/GithubButton';
import HomeButton from './components/HomeButton';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  actions: {
    display: 'flex',
    position: 'relative',
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
}));

const AppToolbar = ({ onClickHome }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Punjabi Classics
          </Typography>
          <div className={classes.actions}>
            <SearchField />
            <HomeButton onClickHome={onClickHome} />
            <GithubButton />
          </div>
        </Toolbar>
      </AppBar>
      {/* Empty <Toolbar> to give appropriate vertical padding since actual <AppBar> is fixed position */}
      <Toolbar />
    </div>
  );
};

AppToolbar.propTypes = {
  onClickHome: PropTypes.func.isRequired,
};

export default AppToolbar;
