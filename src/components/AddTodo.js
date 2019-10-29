import React from 'react';

import AddTextField from './addTodo/AddTextField';
import AddButton from './addTodo/AddButton';

const AddTodo = ( { addNote, updateNoteText } ) => {
    return (
    <form onSubmit={ (e) => {
        e.preventDefault();
        console.log(e.target.div)
        addNote('NewTodo')} }>
        <AddButton type='submit' />
        <AddTextField updateNoteText={updateNoteText} />
    </form>
    )

}

export default AddTodo;