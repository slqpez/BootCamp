import "./App.css";
import { useState } from "react";

const Button = ({ handleClick, clicked }) => (
  <button onClick={handleClick}>
    {clicked ? "Next anecdote" : "Show anecdote"}
  </button>
);

const Vote = ({ handleClickVote }) => (
  <button onClick={handleClickVote}>Vote</button>
);

const Anecdote = ({ anecdotes, clicked, selected }) =>
  clicked ? <p>{anecdotes[selected]}</p> : <></>;

const Heading = ({ text }) => <h2>{text}</h2>;

const MostVotedAnecdoted = ({anectode, votes})=>{
  return(
    <>
    <p>{anectode}</p>
    <p>Votes: {votes}</p>
    </>
  )
}

const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [voteClicked, setVoteClicked] = useState(false);
  const [votes, setVotes] = useState({ 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 });

  const handleClickVote = () => {
    const copy = { ...votes };
    copy[selected] += 1;
    setVotes({ ...copy });
    setVoteClicked(true);
    
  };
  const showRandomAnecdote = () => {
    const min = 0;
    const max = anecdotes.length - 1;
    setSelected(Math.round(Math.random() * (max - min) + min));
    setClicked(true);
    setVoteClicked(false);
  };

  const votesArray = Object.values(votes)
  let maxVoted = Math.max(...votesArray);
  let maxVotedPos = votesArray.indexOf(maxVoted)

    

  return (
    <>
      {!clicked?<></>:<Heading text="Anecdote of de day"></Heading>}
      <Anecdote
        clicked={clicked}
        anecdotes={anecdotes}
        selected={selected}
      ></Anecdote>
      {clicked ? (
        <>
          <p>Votes: {votes[selected]}</p>
          {!voteClicked ? (
            <Vote handleClickVote={handleClickVote}></Vote>
          ) : (
            <></>
          )}
        </>
      ) : (
        <></>
      )}
      <Button handleClick={showRandomAnecdote} clicked={clicked}></Button>
      {votesArray.reduce((a,b)=>a+b)===0?<></>:<><Heading text="Anecdote with most votes"></Heading>
      <MostVotedAnecdoted anectode={anecdotes[maxVotedPos]} votes={maxVoted}></MostVotedAnecdoted></>}
      
    </>
  );
};

export default App;
