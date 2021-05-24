import React from 'react';
import PropTypes from 'prop-types';

const LyricsPage = ({ lyrics: { id } }) => (
  <div>
    {id}
  </div>
);

LyricsPage.propTypes = {
  lyrics: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default LyricsPage;
