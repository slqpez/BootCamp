import "./App.css";
import Note  from "./components/Note"


const App=({notes})=> {
  return (
    <div className="App">
      <div>
      <h1>Notes</h1>
      <ul>
      {notes.map(note=> <Note key={note.id} note={note}></Note>)}
      </ul>
    </div>
    </div>
  );
}

export default App;
