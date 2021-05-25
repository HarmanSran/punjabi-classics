import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import ReactPlayer from 'react-player';

const LyricsPage = ({
  lyrics: {
    title,
    link,
    singer,
    lyricist,
    language,
    translation,
    commentary,
    lyrics,
    footnotes,
  },
}) => (
  <div>
    <Typography variant="h5">{title.original}</Typography>
    <Typography variant="subtitle1">{`"${title.english}"`}</Typography>
    <br />
    <ReactPlayer url={link} />
    <br />
    <hr />
    <Typography variant="subtitle2">{`Singer - ${singer}`}</Typography>
    <Typography variant="subtitle2">{`Lyricist - ${lyricist}`}</Typography>
    <Typography variant="subtitle2">{`Original language - ${language}`}</Typography>
    <Typography variant="subtitle2">{`English translator - ${translation}`}</Typography>
    <hr />
    <Typography variant="subtitle1">Translator&apos;s commentary</Typography>
    {commentary.map((comment, i) => (
      <Typography variant="body2" gutterBottom key={i.toString()}>
        {comment}
      </Typography>
    ))}
    <hr />
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
        <hr />
        <Typography variant="subtitle1">Footnotes</Typography>
        {footnotes.map((footnote, i) => (
          <Typography variant="subtitle2" gutterBottom key={i.toString()}>{footnote}</Typography>
        ))}
        <br />
      </>
    )}
  </div>
);

LyricsPage.propTypes = {
  lyrics: PropTypes.shape({
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
};

export default LyricsPage;
