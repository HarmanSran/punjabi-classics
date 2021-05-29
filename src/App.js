import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
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
  const [activeLyricsId, setActiveLyricsId] = useState(null);
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <AppToolbar isNavBackVisible={activeLyricsId !== null} onClickNavBack={() => setActiveLyricsId(null)} />
      <div className={classes.contentContainer}>
        {activeLyricsId === null && <LyricsGrid lyricsList={lyricsList} onClickLyrics={(id) => setActiveLyricsId(id)} />}
        {activeLyricsId !== null && <LyricsPage lyrics={lyricsList.find(({ id }) => id === activeLyricsId)} />}
      </div>
    </ThemeProvider>
  );
};

App.propTypes = {
  lyricsList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default App;
