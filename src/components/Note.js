import React, { Component } from 'react';


class Note extends Component {
  render (){
    let { handler } = this.props
    let { text , completed} = this.props.note;
    let { listId  } = this.props


    return(
      <div className="note">
      <li>
      <button onClick={ handler } value={listId}>Check</button>
{text}
      <button onClick={ handler } value="delete">Del</button>
      </li>
      </div>
        )
  }
}

export default Note;