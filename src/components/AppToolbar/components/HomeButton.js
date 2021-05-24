import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import HomeIcon from '@material-ui/icons/Home';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  wrapper: {
    marginRight: '24px',
  },
});

const HomeButton = ({ onClickHome }) => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Tooltip title="Home" aria-label="home">
        <IconButton
          edge="start"
          color="inherit"
          aria-label="home"
          onClick={onClickHome}
        >
          <HomeIcon />
        </IconButton>
      </Tooltip>
    </div>
  );
};

HomeButton.propTypes = {
  onClickHome: PropTypes.func.isRequired,
};

export default HomeButton;
