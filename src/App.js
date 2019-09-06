import React, { Component } from 'react';
import './App.css';
import NoteList from './components/NoteList'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      noteText: '',
      notes: []
    }
  }

  addNote() {
    if (this.state.noteText ==='') {return}

    let notesArr = this.state.notes;
    notesArr.push({ text: this.state.noteText , completed: false});
    this.setState({
      noteText: ''
    });
    this.textInput.focus();
  }

  updateNoteText(noteText) {
    this.setState({ noteText: noteText.target.value})
  }

  deleteNote(index) {
    let notesArr = this.state.notes;
    console.log('triying to delete note #', notesArr);
    notesArr.splice(index, 1);
    console.log(index)
    this.setState({
      notes: notesArr
    })
  };

  toggleNote(index) {
    let notesArr = this.state.notes;
    console.log('Toggle number #', notesArr);
     // notesArr[index].completed = !notesArr[index].completed;
    this.setState({
      notes: notesArr
    })
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      let notesArr = this.state.notes;
      notesArr.push({ text: this.state.noteText , completed: false});
      this.setState({
        noteText: ''
      });
      this.textInput.focus();
    }
  }

  clickHandler(event){
    console.log(event.target);
    if (event.target.value === 'delete'){
      this.deleteNote(event);
    }
  }

  render() {


    return (
      <div className="container">
        <div className="header">React To-Do App
        </div>
        <NoteList notes={this.state.notes} handleClick={this.clickHandler.bind(this)} />
        <div className="btn btn-primary" onClick={this.addNote.bind(this)}  >
        +
      </div>
      <input type="text" 
      ref={((input) => {this.textInput = input})}
      className="textInput"
      value={this.state.noteText}
      onChange={noteText => this.updateNoteText(noteText)}
      onKeyPress={this.handleKeyPress.bind(this)}
      />
      </div>
    )
  }
}

export default App;
