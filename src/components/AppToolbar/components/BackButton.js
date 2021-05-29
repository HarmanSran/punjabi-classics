import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  wrapper: {
    marginRight: '12px',
  },
});

const BackButton = ({ onClickNavBack }) => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Tooltip title="Back" aria-label="back">
        <IconButton
          edge="start"
          color="inherit"
          aria-label="back"
          onClick={onClickNavBack}
        >
          <ArrowBackIcon />
        </IconButton>
      </Tooltip>
    </div>
  );
};

BackButton.propTypes = {
  onClickNavBack: PropTypes.func.isRequired,
};

export default BackButton;
