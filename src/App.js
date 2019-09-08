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

  toggleAll(){
    // 1. Look if array length is at least 1.
    let notesArr = this.state.notes;
    if (notesArr.length > 0){
      // 2. if at least 1 is uncompleted we make all completed
      let checkedNotes = 0
      for (let i= 0 ; i< notesArr.length; i++){
        if(notesArr[i].completed){
          checkedNotes+=1; 
        }
      }
      if (checkedNotes === notesArr.length){
        let toggleArr = notesArr.map(note => ({text: note.text , completed : false}))
        this.setState({
          notes: toggleArr
        })
      }
      else {
        let toggleArr = notesArr.map(note => ({text:note.text, completed: true}))
        this.setState({
          notes: toggleArr
        })
      }
      // 3. else we make all unchecked

    }
  }


  render() {


    return (
      <div className="container">
      <div className="header">React To-Do App
      </div>
      <NoteList notes={this.state.notes} toggleAll={this.toggleAll.bind(this)} delButton={this.deleteNote.bind(this)}
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
