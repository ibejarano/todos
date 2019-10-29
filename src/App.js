import React, { Component } from 'react';
import './App.css';
import TodoList from './components/Todo'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import AddTodo from './components/AddTodo';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      noteText: '',
      notes: [{text: 'Go to the Gym' , completed: false},
      {text: 'Clean desktop and monitor' , completed: false},
      {text: 'Buy groceries and food for lunch' , completed: true},
      {text: 'Run 3 kilometers at 6PM' , completed: false}]
  };  
    }



  addNote() {
    if (this.state.noteText === '') {return}
    let notesArr = this.state.notes;
    notesArr.push({ text: this.state.noteText , completed: false});
    this.setState({
      noteText: ''
    });
  }

  updateNoteText(noteText) {
    this.setState({ noteText: noteText})
  }

  deleteNote(id) {
    let notesArr = [...this.state.notes];
    notesArr.splice(id, 1);
    console.log(id);
    this.setState({
       notes: notesArr
     })
  };

  toggleNote(id) {
    // let notesArr = this.state.notes;
    // notesArr.splice(index, 1);
    const copyNotes = [...this.state.notes]
    copyNotes[id].completed = !copyNotes[id].completed  
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

    return (
      <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} >
        <TodoList notes={this.state.notes}
          toggleCheck={this.toggleNote.bind(this) }
          deleteNote={ this.deleteNote.bind(this) }
          />
          <AddTodo addNote={this.addNote.bind(this)}
                  updateNoteText={this.updateNoteText.bind(this)}
                  text={this.state.noteText}
          />
          </Typography>
      </Container>
    </React.Fragment>


    )
  }
}

export default App;
