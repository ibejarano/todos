import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import ClearIcon from '@material-ui/icons/Clear';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  fab: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function ConfirmButton({type, handleClose}) {
  const classes = useStyles();

  return (
    <Fab
      onClick={handleClose}
      size='small'
      type={type}
      color="secondary"
      aria-label="edit"
      className={classes.fab}>
      <ClearIcon />
    </Fab>
  );
}
