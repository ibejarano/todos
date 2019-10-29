import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

export default function EditPopper({ target , isOpen , text}) {
  const classes = useStyles();
  const [anchor, setAnchor] = React.useState(null);


  const handleClose = () => {
    anchorEl = null
    isOpen = false
  };

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
        <Typography className={classes.typography}>{text}</Typography>
      </Popover>
    </div>
  );
}