import "./App.css";
import { useState } from "react";

const Button = ({ handleClick, clicked }) => (
  <button onClick={handleClick}>{clicked ? "Next anecdote" : "Show anecdote"}</button>
);

const Vote =({handleClickVote})=>
  <button onClick={handleClickVote}>Vote</button>


const Anecdote =({anecdotes, clicked, selected})=> 
clicked ? <p>{anecdotes[selected]}</p> : <></>



const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [voteClicked, setVoteClicked] = useState(false);
  const [votes, setVotes] = useState({0:0,1:0,2:0,3:0,4:0,5:0})

  const handleClickVote=()=>{
    const copy = {...votes}
    copy[selected] +=1
    setVotes({...copy})
    setVoteClicked(true)
    
    
}
  const showRandomAnecdote = () => {
    const min = 0;
    const max = anecdotes.length - 1;
    setSelected(Math.round(Math.random() * (max - min) + min));
    setClicked(true);
    setVoteClicked(false)
  };

  return (
    <>
      <Button handleClick={showRandomAnecdote} clicked={clicked}></Button>
      <Anecdote clicked={clicked} anecdotes={anecdotes} selected={selected}></Anecdote>
      
      {clicked?<>
      <p>Votes: {votes[selected]}</p>{!voteClicked?<Vote handleClickVote={handleClickVote}></Vote>:<></>}</>:<></>}
     
    </>
  );
};

export default App;
