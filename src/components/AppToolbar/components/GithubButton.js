import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import GitHubIcon from '@material-ui/icons/GitHub';
import { repository } from '../../../../package.json';

const GithubButton = () => (
  <Tooltip title="Source" aria-label="source">
    <IconButton
      edge="start"
      color="inherit"
      aria-label="open github"
      onClick={() => window.open(repository)}
    >
      <GitHubIcon />
    </IconButton>
  </Tooltip>
);

export default GithubButton;
