import React from 'react';
import PropTypes from 'prop-types';

const App = ({ lyrics }) => (
  <div>
    <ul>
      {lyrics.map((lyric) => <li>{lyric.link}</li>)}
    </ul>
  </div>
);

App.propTypes = {
  lyrics: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default App;
