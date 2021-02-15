import "./App.css";
import { useState } from "react";

const Button = ({ handleClick, clicked }) => (
  <button onClick={handleClick}>{clicked ? "Next anecdote" : "Show anecdote"}</button>
);

const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0);
  const [clicked, setClicked] = useState(false);
  const showRandomAnecdote = () => {
    const min = 0;
    const max = anecdotes.length - 1;
    setSelected(Math.round(Math.random() * (max - min) + min));
    setClicked(true);
  };

  return (
    <>
      <Button handleClick={showRandomAnecdote} clicked={clicked}></Button>
      {clicked ? <p>{anecdotes[selected]}</p> : <p></p>}
    </>
  );
};

export default App;
