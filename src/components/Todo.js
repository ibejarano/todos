import React from 'react';

import Checkbox from '@material-ui/core/Checkbox';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import DeleteIcon from '@material-ui/icons/Delete';
import { List, ListItem } from '@material-ui/core';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));


const TodoList = ({notes, toggleCheck, deleteNote}) => {
    
    const classes = useStyles();
    const newTodos = notes.map((val, ind) => {
        return(
          <ListItem key={ind}>
            <ListItemIcon>
              <Checkbox
              value={ind}
              onClick={() => toggleCheck(ind)} 
                edge="start"
              checked={val.completed}
              />
            </ListItemIcon>
            <ListItemText primary={val.text} />
            <ListItemSecondaryAction >
                <IconButton onClick={() => deleteNote(ind)} edge="end" className={classes.button} aria-label="delete" disableRipple> 
                    <DeleteIcon />     
                </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        )
      } )

    return(
        <List >  
        <ListSubheader>Todo List</ListSubheader>
        <input type="text" 
        />
          {newTodos}
      </List>  
    );
}

export default TodoList;