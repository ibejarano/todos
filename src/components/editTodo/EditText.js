import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  input: {
    margin: theme.spacing(1),
  },
}));

export default function EditText({text, handleEditChange}) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Input
        defaultValue={text}
        className={classes.input}
        inputProps={{
          'aria-label': 'description',
        }}
        onChange={handleEditChange}
      />
    </div>
  );
}