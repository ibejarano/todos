import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function EditButton({type}) {
  const classes = useStyles();

  return (
    <div>
      <Fab type={type} color="secondary" aria-label="edit" className={classes.fab}>
        <EditIcon />
      </Fab>
    </div>
  );
}