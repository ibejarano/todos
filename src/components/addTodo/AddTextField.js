import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '80%',
  },
}));

export default function AddTextField({ updateNoteText, text }) {
  const classes = useStyles();

  return (
        <TextField
          id="outlined-basic"
          className={classes.textField}
          label="Nuevo To-do"
          margin="normal"
          variant="outlined"
          type="text"
          onChange={(e) => {updateNoteText(e.target.value)
            
          }}
          value={text}
        />
  );
}
