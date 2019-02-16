import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ReactPlayer from 'react-player';
import songs from '../../data/songData';

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: '16px',
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  playerWrapper: {
    display: 'inline-block',
  },
});

const SongDetail = ({ classes, match }) => {
  const { link } = songs.find(s => s.id === match.params.id); // array.find() unsupported in IE11

  return (
    <div className={classes.root}>
      <Grid container spacing={16}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <div className={classes.playerWrapper}>
              {/* TODO: Limited mobile support for ReactPlayer */}
              <ReactPlayer url={link} playing controls loop />
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Lyrics</Paper>
        </Grid>
      </Grid>
    </div>
  );
};

SongDetail.propTypes = {
  classes: PropTypes.object.isRequired, // from withStyles()
  match: PropTypes.object.isRequired, // from <Route />
};

export default withStyles(styles)(SongDetail);
