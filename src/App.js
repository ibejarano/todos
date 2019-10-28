import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Todo from './components/Todo';
import { List } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';


const styles = {
  root: {
      display: 'flex',
      flexWrap: 'wrap',
  },
}

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

  deleteNote(i) {
    let notesArr = this.state.notes;
    //console.log('triying to delete note #', notesArr);
    notesArr.splice(i, 1);
    console.log(i);
    this.setState({
      notes: notesArr
    })
  };

  toggleNote(e) {
    // let notesArr = this.state.notes;
    // notesArr.splice(index, 1);
    const copyNotes = this.state.notes
    copyNotes[e.target.value].completed = !copyNotes[e.target.value].completed  
    this.setState({
      notes: copyNotes
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

    let newTodos = this.state.notes.map((val, key) => {
      return(
          <Todo deleteNote={this.deleteNote.bind(this)} key={key} ind={key} completed={val.completed} text={val.text} toggleCheck={this.toggleNote.bind(this)}/>
      )
    } )

    return (
      <MuiThemeProvider>
        <div style={styles.root}>
          <List>  
            <Subheader>Todo List</Subheader>
            <input type="text" 
            
            />
              {/* <button onClick={toggleAll} > toggle all</button> */}
              {newTodos}
          </List>    
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App;
