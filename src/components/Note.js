import React, { Component } from 'react';


class Note extends Component {
  render (){
    let { handler } = this.props
    let { text , completed } = this.props.note;
    let styledComp = "list-group-item d-flex justify-content-between align-items-center" + (completed? "":" disabled");

    return(
      <div className="note">
      <button className="btn btn-info"onClick={ handler } value="toggle">Toggle Completed</button>
      <li  className={styledComp}>
{text}
      </li>
      <button className="btn btn-danger" onClick={ handler } value="delete">Delete Task</button>
      </div>
        )
  }
}

export default Note;