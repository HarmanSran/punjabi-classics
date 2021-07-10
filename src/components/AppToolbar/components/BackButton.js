import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  wrapper: {
    marginRight: '12px',
  },
});

const BackButton = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Tooltip title="Back" aria-label="back">
        <IconButton
          edge="start"
          color="inherit"
          aria-label="back"
          component={Link}
          to="/"
        >
          <ArrowBackIcon />
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default BackButton;
