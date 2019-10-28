import React from 'react';

import Checkbox from 'material-ui/Checkbox';
import { ListItem } from 'material-ui/List';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';



const Todo = ({completed , text, ind, toggleCheck, deleteNote}) => {
    return(
        <ListItem primaryText={text}
            leftCheckbox={<Checkbox value={ind}
            rightCheckbox = {<Checkbox />}
            checked={completed} 
            onCheck={toggleCheck}
            />}>
            <ListItemSecondaryAction>
            <IconButton value={ind} onClick={deleteNote(ind)} edge="end" aria-label="delete">
                <DeleteIcon />
            </IconButton>
            </ListItemSecondaryAction>

        </ListItem>
    );
}

export default Todo;