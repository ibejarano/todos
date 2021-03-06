import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
    fab: {
      margin: theme.spacing(2),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));
  
  export default function AddButton({ type }) {
    const classes = useStyles();
  
    return (
        <Fab type={type} color="primary" aria-label="add" className={classes.fab}>
          <AddIcon />
        </Fab>
    );
  }
