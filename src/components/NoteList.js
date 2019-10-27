import React, { Component } from 'react';
import Note from './Note';
import Todo from './Todo';

class NoteList extends Component {
    render() {
        let { notes, toggleButton, delButton, toggleAll } = this.props

        let notesComponents = notes.map((val, key) => {
            return <Note key={key} listId={key} note={val} 
            toggle={toggleButton} del={delButton}
            />
          })

        let newTodos = notes.map((val, key) => {
            return(
                <Todo completed={val.completed} text={val.text} />
            )
        } )

        return (
            <ul className="notes-list">
                <button onClick={toggleAll} > toggle all</button>
                {notesComponents}
                {newTodos}
            </ul>
        )
    }
}

export default NoteList