import './App.css';
import {useState} from "react"



const App = ({anecdotes}) => {
  const [selected, setSelected] = useState(0)
  const [clicked, setClicked] = useState(false)
  const showRandomAnecdote =()=>{
    const min=0
    const max= anecdotes.length-1
    setSelected(Math.round(Math.random() * (max - min) + min));
    setClicked(true)
    
  }

  return (
    <>
      <button onClick={showRandomAnecdote}>Show anecdote</button>
      {clicked?<p>{anecdotes[selected]}</p>:<p></p>}
      
    </>
  )
}



export default App;
