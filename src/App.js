import React from 'react';
import PropTypes from 'prop-types';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import AppToolbar from './components/AppToolbar/AppToolbar';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#192978',
    },
  },
});

const App = ({ lyrics }) => (
  <ThemeProvider theme={theme}>
    <AppToolbar />
    <ul>
      {lyrics.map((lyric) => <li>{lyric.link}</li>)}
      {lyrics.map((lyric) => <li>{lyric.link}</li>)}
      {lyrics.map((lyric) => <li>{lyric.link}</li>)}
      {lyrics.map((lyric) => <li>{lyric.link}</li>)}
      {lyrics.map((lyric) => <li>{lyric.link}</li>)}
      {lyrics.map((lyric) => <li>{lyric.link}</li>)}
      {lyrics.map((lyric) => <li>{lyric.link}</li>)}
      {lyrics.map((lyric) => <li>{lyric.link}</li>)}
      {lyrics.map((lyric) => <li>{lyric.link}</li>)}
      {lyrics.map((lyric) => <li>{lyric.link}</li>)}
    </ul>
  </ThemeProvider>
);

App.propTypes = {
  lyrics: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default App;
