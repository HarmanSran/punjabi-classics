import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { Link } from 'react-router-dom';
import songs from '../../data/songData';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 600,
    height: '100%',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

const SongList = ({ classes }) => (
  <div className={classes.root}>
    <GridList cellHeight={180} className={classes.gridList}>
      <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
        <ListSubheader component="div">Song List</ListSubheader>
      </GridListTile>
      {songs.map(song => (
        <GridListTile key={song.id}>
          <img src={song.img} alt="" />
          <GridListTileBar
            title={song.title}
            subtitle={song.singer}
            actionIcon={(
              <Link to={`/song/${song.id}`}>
                <IconButton className={classes.icon}>
                  <PlayArrowIcon />
                </IconButton>
              </Link>
            )}
          />
        </GridListTile>
      ))}
    </GridList>
  </div>
);

SongList.propTypes = {
  classes: PropTypes.object.isRequired, // from withStyles()
};

export default withStyles(styles)(SongList);
