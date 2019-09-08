import React, { Component } from 'react';
import Note from './Note';

class NoteList extends Component {
    render() {
        let { notes, toggleButton, delButton, toggleAll } = this.props

        let notesComponents = notes.map((val, key) => {
            return <Note key={key} listId={key} note={val} 
            toggle={toggleButton} del={delButton}
            />
          })

        return (
            <ul className="notes-list">
                <button onClick={toggleAll} > toggle all</button>
                {notesComponents}
            </ul>
        )
    }
}

export default NoteList