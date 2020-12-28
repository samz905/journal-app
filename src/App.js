import React from 'react';
import firebase from "firebase";
import Sidebar from './sidebar/sidebar'
import Editor from "./editor/editor";
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      selectedNoteIndex : null,
      selectedNote : null,
      notes : null
    }
  }

  componentDidMount = () => {
    firebase
      .firestore()
      .collection('notes')
      .onSnapshot(serverUpdate => {
        const notes = serverUpdate.docs.map(_doc => {
          const data = _doc.data();
          data['id'] = _doc.id;
          return data;
        });
        console.log(notes);
        this.setState({ notes: notes });
      });
  }

  selectNote = (note, index) => this.setState({ selectedNoteIndex: index, selectedNote: note });

  render() {
    return (
      <div className="App">
        <Sidebar 
          selectedNoteIndex={this.state.selectedNoteIndex}
          notes={this.state.notes}
          deleteNote={this.deleteNote}
          selectNote={this.selectNote}
          newNote={this.newNote}
        >
        </Sidebar>
        <Editor></Editor>
      </div>
    );
  }
}

export default App;
