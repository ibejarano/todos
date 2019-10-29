import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

export default function EditPopper({ target , isOpen , text, handleClose}) {
  const classes = useStyles();

  const id = isOpen ? 'simple-popover' : undefined;
  let anchorEl = target? target : null;

  return (
    <div>
      <Popover
        id={id}
        open={isOpen}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography className={classes.typography} onClick={() => handleClose() } >{text}</Typography>
      </Popover>
    </div>
  );
}