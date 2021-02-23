import React, { useState} from "react"
import "./App.css";
import Note  from "./components/Note"

const App=({notes})=> {
  const [notesState, setNotes] = useState(notes)
  const [newNote, setNewNote] = useState("")

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notesState.length + 1,
    }

    setNotes([...notesState, noteObject])
    setNewNote('')
  }
  function handleNoteChange(e){
    setNewNote(e.target.value)
  }
  return (
    <div className="App">
      <div>
      <h1>Notes</h1>
      <ul>
       {notesState.map(note=> <Note key={note.id} note={note}></Note>)} 
      </ul>
      <form onSubmit={addNote}>
      <input value={newNote} onChange={handleNoteChange}/>
        <button type="submit">save</button>
      </form> 
    </div>
    </div>
  );
}

export default App;
