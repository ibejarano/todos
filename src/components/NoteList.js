import React, { Component } from 'react';
import Note from './Note';

class NoteList extends Component {
    render() {
        let { notes, handleClick } = this.props

        let notesComponents = notes.map((val, key) => {
            return <Note key={key} note={val} handler={ handleClick }
            />
          })

        return (
            <ul className="list-group">
                {notesComponents}
            </ul>
        )
    }
}

export default NoteList