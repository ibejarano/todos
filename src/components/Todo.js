import React from 'react';

import Checkbox from 'material-ui/Checkbox';
import { ListItem } from 'material-ui/List';



const Todo = ({completed , text, ind, toggleCheck}) => {
    return(
        <ListItem primaryText={text}
            leftCheckbox={<Checkbox value={ind}
            rightCheckbox = {<Checkbox />}
            checked={completed} 
            onCheck={toggleCheck}
            />} />
    );
}

export default Todo;