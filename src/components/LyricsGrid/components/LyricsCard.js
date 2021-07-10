import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  card: {
    width: '450px',
  },
  cardContent: {
    height: '150px',
  },
  title: {
    fontSize: 14,
  },
  subTitle: {
    fontSize: 13,
    marginBottom: 12,
  },
});

const LyricsCard = ({
  id, singer, originalTitle, translatedTitle, lyricist,
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {singer}
        </Typography>
        <Typography variant="h5" component="h2">
          {originalTitle}
        </Typography>
        <Typography className={classes.subTitle} color="textSecondary">
          {`Lyricist: ${lyricist}`}
        </Typography>
        <Typography variant="body2" component="p">
          {`"${translatedTitle}"`}
        </Typography>
      </CardContent>
      <CardActions>
        <Button component={Link} to={`/lyrics/${id}`} size="small">Go to lyrics</Button>
      </CardActions>
    </Card>
  );
};

LyricsCard.propTypes = {
  id: PropTypes.string.isRequired,
  singer: PropTypes.string.isRequired,
  originalTitle: PropTypes.string.isRequired,
  translatedTitle: PropTypes.string.isRequired,
  lyricist: PropTypes.string,
};

LyricsCard.defaultProps = {
  lyricist: 'Unknown',
};

export default LyricsCard;
