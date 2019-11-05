import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    maxWidth: '600px'
  },
}));

export default function TodoListContainer(props) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      {props.children}
    </Paper>
  );
}