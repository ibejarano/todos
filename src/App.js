import React, { Component } from 'react';
import './App.css';
import NoteList from './components/NoteList'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      noteText: '',
      notes: [{text: 'Go th the Gym' , completed: false},
      {text: 'Clean desktop and monitor' , completed: false},
      {text: 'Buy groceries and food for lunch' , completed: true},
      {text: 'Run 3 kilometers at 6PM' , completed: false}]
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

  deleteNote(e) {
    let notesArr = this.state.notes;
    //console.log('triying to delete note #', notesArr);
    notesArr.splice(e.target.value, 1);
    this.setState({
      notes: notesArr
    })
  };

  toggleNote(e) {
    let notesArr = this.state.notes;
    //console.log('triying to delete note #', notesArr);
    // notesArr.splice(index, 1);
    notesArr[e.target.value].completed = !notesArr[e.target.value].completed 
    this.setState({
      notes: notesArr
    })
  };

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

  render() {


    return (
      <div className="container">
      <div className="header">React To-Do App
      </div>
      <NoteList notes={this.state.notes} delButton={this.deleteNote.bind(this)}
      toggleButton={this.toggleNote.bind(this)}
      />
      
      <div className="add-note">
      <div className="add-button" onClick={this.addNote.bind(this)}>
         + 
      </div>
      <input type="text" 
      ref={((input) => {this.textInput = input})}
      className="text-input"
      value={this.state.noteText}
      onChange={noteText => this.updateNoteText(noteText)}
      onKeyPress={this.handleKeyPress.bind(this)}
      placeholder="Add a new task"
      />
      </div>
      </div>
    )
  }
}

export default App;
