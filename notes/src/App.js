import React, { useState} from "react"
import "./App.css";
import Note  from "./components/Note"

const App=({notes})=> {
  const [notesState, setNotes] = useState(notes)
  const [newNote, setNewNote] = useState("")
  const [showAll, setShowAll] = useState(true)

  function addNote (event){
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
  function handleShowAll(e){
    e.preventDefault()
    setShowAll((previusState=> !previusState))
    console.log(showAll)
  }

  const notesToShow = showAll? notesState: notesState.filter(note=> note.important)

  return (
    <div className="App">
      <div>
      <h1>Notes</h1>
      <button className="btn btn-show" onClick={handleShowAll}>Show {showAll?"importants":"all"}</button>
      <ul>
       {notesToShow.map(note=> <Note key={note.id} note={note}></Note>)} 
      </ul>
      <form onSubmit={addNote}>
      <input value={newNote} onChange={handleNoteChange}/>
        <button className="btn btn-submit" type="submit">save</button>
      </form> 
    </div>
    </div>
  );
}

export default App;
