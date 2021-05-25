import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const LyricsPage = ({ lyrics: { title } }) => (
  <div>
    <Typography variant="h5">{title.original}</Typography>
  </div>
);

LyricsPage.propTypes = {
  lyrics: PropTypes.shape({
    title: PropTypes.shape({
      original: PropTypes.string.isRequired,
      english: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default LyricsPage;
