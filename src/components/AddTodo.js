import React from 'react';

import AddTextField from './addTodo/AddTextField';
import AddButton from './addTodo/AddButton';

const AddTodo = ( { addNote, updateNoteText, text } ) => {
    return (
    <form onSubmit={ (e) => {
        e.preventDefault();
        addNote()} }>
        <AddButton type='submit' />
        <AddTextField updateNoteText={updateNoteText} text={text} />
    </form>
    )

}

export default AddTodo;