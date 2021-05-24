import React from 'react';
import PropTypes from 'prop-types';

const LyricsGrid = ({ lyricsList }) => (
  <ul>
    {lyricsList.map((lyric) => <li>{lyric.link}</li>)}
  </ul>
);

LyricsGrid.propTypes = {
  lyricsList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default LyricsGrid;
