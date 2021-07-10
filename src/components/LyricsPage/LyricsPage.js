import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';

const HorizontalLine = () => <hr style={{ maxWidth: '500px' }} />;

const LyricsPage = ({ lyricsList }) => {
  const { id: activeLyricsId } = useParams();
  const {
    title,
    link,
    singer,
    lyricist,
    language,
    translation,
    commentary,
    lyrics,
    footnotes,
  } = lyricsList.find(({ id }) => id === activeLyricsId);
  return (
    <div style={{ textAlign: 'center' }}>
      <Typography variant="h5">{title.original}</Typography>
      <Typography variant="subtitle1">{`"${title.english}"`}</Typography>
      <br />
      <ReactPlayer url={link} style={{ margin: '0 auto' }} />
      <br />
      <HorizontalLine />
      <Typography variant="subtitle2">{`Singer - ${singer}`}</Typography>
      <Typography variant="subtitle2">{`Lyricist - ${lyricist}`}</Typography>
      <Typography variant="subtitle2">{`Original language - ${language}`}</Typography>
      <Typography variant="subtitle2">{`English translator - ${translation}`}</Typography>
      <HorizontalLine />
      <Typography variant="subtitle1">Harman&apos;s commentary</Typography>
      {commentary.map((comment, i) => (
        <Typography variant="body2" gutterBottom key={i.toString()}>
          {comment}
        </Typography>
      ))}
      <HorizontalLine />
      <Typography variant="subtitle1">Lyrics</Typography>
      {lyrics.map((lyric, i) => (
        <Fragment key={i.toString()}>
          <Typography variant="body2" gutterBottom>{lyric[0]}</Typography>
          <Typography variant="body2" style={{ fontWeight: 600 }}>{lyric[1]}</Typography>
          <br />
        </Fragment>
      ))}
      {footnotes && (
        <>
          <HorizontalLine />
          <Typography variant="subtitle1">Footnotes</Typography>
          {footnotes.map((footnote, i) => (
            <Typography variant="subtitle2" gutterBottom key={i.toString()}>{footnote}</Typography>
          ))}
          <br />
        </>
      )}
    </div>
  );
};

LyricsPage.propTypes = {
  lyricsList: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.shape({
        original: PropTypes.string.isRequired,
        english: PropTypes.string.isRequired,
      }).isRequired,
      link: PropTypes.string.isRequired,
      singer: PropTypes.string.isRequired,
      lyricist: PropTypes.string.isRequired,
      language: PropTypes.string.isRequired,
      translation: PropTypes.string.isRequired,
      commentary: PropTypes.arrayOf(PropTypes.string).isRequired,
      lyrics: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
      footnotes: PropTypes.arrayOf(PropTypes.string),
    }).isRequired,
  ).isRequired,
};

export default LyricsPage;
