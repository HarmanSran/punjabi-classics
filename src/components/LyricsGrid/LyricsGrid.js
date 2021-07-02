import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import LyricsCard from './components/LyricsCard';

const LyricsGrid = ({ lyricsList, onClickLyrics }) => (
  <Grid
    container
    spacing={3}
    justify="center"
  >
    {lyricsList.map(({
      singer, title, lyricist, id,
    }) => (
      <Grid item key={id}>
        <LyricsCard
          singer={singer}
          originalTitle={title.original}
          translatedTitle={title.english}
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
    title: PropTypes.shape({
      original: PropTypes.string.isRequired,
      english: PropTypes.string.isRequired,
    }).isRequired,
    lyricist: PropTypes.string,
  })).isRequired,
  onClickLyrics: PropTypes.func.isRequired,
};

export default LyricsGrid;
