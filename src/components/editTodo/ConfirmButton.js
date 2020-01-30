import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import DoneIcon from '@material-ui/icons/Done';

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

export default function ConfirmButton({type}) {
  const classes = useStyles();

  return (
    <Fab
      onClick={() => console.log('you are clicking me!')}
      size="small"
      type={type}
      color="primary"
      aria-label="edit"
      className={classes.fab}>
      <DoneIcon />
    </Fab>
  );
}
