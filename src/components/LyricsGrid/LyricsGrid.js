import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import LyricsCard from './components/LyricsCard';

const LyricsGrid = ({ lyricsList, onClickLyrics }) => (
  <Grid container spacing={3}>
    {lyricsList.map(({
      singer, title, lyricist, id,
    }) => (
      <Grid item>
        <LyricsCard
          singer={singer}
          originalTitle={title['0']}
          translatedTitle={title['1']}
          lyricist={lyricist}
          onClickLyrics={() => onClickLyrics(id)}
        />
      </Grid>
    ))}
  </Grid>
);

LyricsGrid.propTypes = {
  lyricsList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    singer: PropTypes.string.isRequired,
    originalTitle: PropTypes.string.isRequired,
    translatedTitle: PropTypes.string.isRequired,
    lyricist: PropTypes.string,
  })).isRequired,
  onClickLyrics: PropTypes.func.isRequired,
};

export default LyricsGrid;
