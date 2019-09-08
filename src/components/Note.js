import React, { Component } from 'react';


class Note extends Component {
  render (){
    let { toggle, del } = this.props
    let { text , completed} = this.props.note;
    let { listId  } = this.props
    let styleNote = "note "+(completed ? "note-completed":"")
    console.log(listId)
    return(
      <li className={styleNote}>
      {text}
      <button onClick={ toggle } value={ listId }>Check </button>
      <button onClick={ del } value={ listId }> Del</button>
      </li>
        )
  }
}

export default Note;