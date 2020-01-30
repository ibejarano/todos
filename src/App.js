import React, {Component} from 'react';
import './App.css';
import TodoList from './components/Todo';
import Typography from '@material-ui/core/Typography';
import AddTodo from './components/AddTodo';
import EditPopper from './components/editTodo/EditPopper';
import ToggleButtons from './components/ToggleButtons';
import AppBar from './components/Toolbar';
import TodoListContainer from './components/TodoListContainer';
import Container from '@material-ui/core/Container';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteText: '',
      notes: [
        {text: 'Go to the Gym', completed: false},
        {text: 'Clean desktop and monitor', completed: false},
        {text: 'Buy groceries and food for lunch', completed: true},
        {text: 'Run 3 kilometers at 6PM', completed: false},
      ],
      isOpen: false,
      popper: null,
      editText: '',
    };
  }

  handleEdit(target, text, ind) {
    this.setState({
      popper: (
        <EditPopper
          target={target}
          text={text}
          isOpen={true}
          ind={ind}
          handleClose={this.handleClose.bind(this)}
          handleEditConfirm={this.handleEditConfirm.bind(this)}
          handleEditChange={this.handleEditChange.bind(this)}
        />
      ),
      isOpen: true,
      editText: text
    });
  }

  handleEditConfirm(ind) {
    console.log('calling edit confirm...')
    const newNotes = [...this.state.notes];
    newNotes[ind].text = this.state.editText;
    this.setState({
      notes: newNotes,
    });
    this.handleClose();
  }

  handleEditChange(e) {
    this.setState({
      editText: e.target.value,
    });
  }

  handleClose() {
    this.setState({
      isOpen: false,
      popper: null,
    });
  }

  addNote() {
    if (this.state.noteText === '') {
      return;
    }
    let notesArr = this.state.notes;
    notesArr.push({text: this.state.noteText, completed: false});
    this.setState({
      noteText: '',
    });
  }

  updateNoteText(noteText) {
    this.setState({noteText: noteText});
  }

  deleteNote(id) {
    let notesArr = [...this.state.notes];
    notesArr.splice(id, 1);
    this.setState({
      notes: notesArr,
    });
  }

  toggleNote(id) {
    // let notesArr = this.state.notes;
    // notesArr.splice(index, 1);
    const copyNotes = [...this.state.notes];
    copyNotes[id].completed = !copyNotes[id].completed;
    this.setState({
      notes: copyNotes,
    });
  }

  handleKeyPress = event => {
    if (event.key === 'Enter') {
      let notesArr = this.state.notes;
      notesArr.push({text: this.state.noteText, completed: false});
      this.setState({
        noteText: '',
      });
      this.textInput.focus();
    }
  };

  toggleAll(check) {
    // 1. Look if array length is at least 1.
    let notesArr = this.state.notes;
    let toggleArr = notesArr.map(note => ({text: note.text, completed: check}));
    this.setState({
      notes: toggleArr,
    });
  }

  deleteAll() {
    this.setState({
      notes: [],
    });
  }

  handleGroupButton(action) {
    if (action === 'check') {
      this.toggleAll(true);
    } else if (action === 'uncheck') {
      this.toggleAll(false);
    } else if (action === 'delete') {
      this.deleteAll();
    }
  }

  render() {
    return (
      <div>
        <AppBar />
        <Container maxWidth="sm">
          <Typography component="div" style={{height: '100vh'}}>
            <TodoListContainer>
              <ToggleButtons
                handleGroupButton={this.handleGroupButton.bind(this)}
              />
              <TodoList
                notes={this.state.notes}
                toggleCheck={this.toggleNote.bind(this)}
                deleteNote={this.deleteNote.bind(this)}
                handleEdit={this.handleEdit.bind(this)}
              />
            </TodoListContainer>
            <AddTodo
              addNote={this.addNote.bind(this)}
              updateNoteText={this.updateNoteText.bind(this)}
              text={this.state.noteText}
            />
            {this.state.isOpen ? this.state.popper : null}
          </Typography>
        </Container>
      </div>
    );
  }
}

export default App;
