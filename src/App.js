import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
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

const App = ({ lyricsList }) => {
  const [activeLyricsId, setActiveLyricsId] = useState(null);
  return (
    <ThemeProvider theme={theme}>
      <AppToolbar onClickHome={() => setActiveLyricsId(null)} />
      {activeLyricsId === null && <LyricsGrid lyricsList={lyricsList} onClickLyrics={(id) => setActiveLyricsId(id)} />}
      {activeLyricsId !== null && <LyricsPage lyrics={lyricsList.find(({ id }) => id === activeLyricsId)} />}
    </ThemeProvider>
  );
};

App.propTypes = {
  lyricsList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default App;
