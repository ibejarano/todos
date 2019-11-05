import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import AddTextField from './addTodo/AddTextField';
import AddButton from './addTodo/AddButton';

import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    maxWidth: '400px',
  },
  form: {
      margin: '0 auto',
      display: 'flex',
      textAlign: 'center'
  },
  button: {
    padding: '0',
    margin: '0'
  },
  textField: {
    padding: '0',
    margin: '0'
  }
}));

export default function AddTodo  ( { addNote, updateNoteText, text } ) {
    const classes = useStyles()    
    return (
        <Paper elevation='5' className={classes.root}>
            <form className={classes.form}  onSubmit={ (e) => {
                e.preventDefault();
                addNote()} }>
                <AddButton className={classes.button} type='submit' />
                <AddTextField className={classes.textField} updateNoteText={updateNoteText} text={text} />
            </form>
        </Paper>
    )

}

