import React from 'react';
import PropTypes from 'prop-types';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import AppToolbar from './components/AppToolbar/AppToolbar';
import LyricsGrid from './components/LyricsGrid/LyricsGrid';
import LyricsPage from './components/LyricsPage/LyricsPage';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#192978',
    },
  },
});

const useStyles = makeStyles({
  contentContainer: {
    margin: '24px',
  },
});

const App = ({ lyricsList }) => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <AppToolbar />
      <div className={classes.contentContainer}>
        <Router>
          <Switch>
            <Route path="/lyrics/:id">
              <LyricsPage lyricsList={lyricsList} />
            </Route>
            <Route path="/">
              <LyricsGrid lyricsList={lyricsList} />
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
};

App.propTypes = {
  lyricsList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default App;
