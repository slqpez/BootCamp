import React, { useState, useEffect } from "react";
import "./App.css";
import Note from "./components/Note";
import axios from "axios";
import noteService from './services/notes'

const App = () => {
  const [notesState, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    noteService
    .getAll()
    .then(response => {
      setNotes(response.data)
    });
  }, []);

  function addNote(event) {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notesState.length + 1,
    };
    noteService
      .create(noteObject)
      .then(response => {
        setNotes(notesState.concat(response.data))
        setNewNote('')
      })
  }
  function handleNoteChange(e) {
    setNewNote(e.target.value);
  }
  function handleShowAll(e) {
    e.preventDefault();
    setShowAll(!showAll);
  }
  const toggleImportanceOf = (id) => {
    const note = notesState.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }
  
    noteService
      .update(id, changedNote)
      .then(response => {
        setNotes(notesState.map(note => note.id !== id ? note : response.data))
      }).catch(error =>{
        alert(
          `the note '${note.content}' was already deleted from server`
        )
        setNotes(notesState.filter(n => n.id !== id))
      })
  }

  const notesToShow = showAll
    ? notesState
    : notesState.filter((note) => note.important);

  return (
    <div className="App">
      <div>
        <h1>Notes</h1>
        <button className="btn btn-show" onClick={handleShowAll}>
          Show {showAll ? "importants" : "all"}
        </button>
        <ul>
          {notesToShow.map((note) => (
            <Note key={note.id} note={note} toggleImportance={()=>toggleImportanceOf(note.id)}></Note>
          ))}
        </ul>
        <form onSubmit={addNote}>
          <input value={newNote} onChange={handleNoteChange} />
          <button className="btn btn-submit" type="submit">
            save
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
