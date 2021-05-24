import React from 'react';
import PropTypes from 'prop-types';

const LyricsGrid = ({ allLyrics }) => (
  <ul>
    {allLyrics.map((lyric) => <li>{lyric.link}</li>)}
  </ul>
);

LyricsGrid.propTypes = {
  allLyrics: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default LyricsGrid;
