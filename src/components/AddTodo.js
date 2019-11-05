import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import AddTextField from './addTodo/AddTextField';
import AddButton from './addTodo/AddButton';

import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
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
            <form  onSubmit={ (e) => {
                e.preventDefault();
                addNote()} }>
                <AddButton  type='submit' />
                <AddTextField updateNoteText={updateNoteText} text={text} />
            </form>
        </Paper>
    )

}

