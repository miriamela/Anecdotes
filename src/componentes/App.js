import React, { useState } from "react";
import DisplayAnecdote1 from "./DisplayAnecdote1";
import Buttons from "./Buttons";
import DisplayAnecdote2 from "./DisplayAnecdote2";
import "../App.scss";
const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];
function App() {
  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState(new Array(anecdotes.length).fill(0));

  const handleSentence = () =>
    setSelected(Math.floor(Math.random() * (anecdotes.length - 0)) + 0);

  const handleVote = () => {
    const newVote = [...vote];
    newVote[selected] += 1;
    setVote(newVote);
  };
  const maxVote = Math.max(...vote);
  const indexMaxVote = vote.indexOf(maxVote);
  return (
    <div className="App">
      <h1>-- Anecdote of the day --</h1>
      <DisplayAnecdote1
        anecdotes={anecdotes[selected]}
        vote={vote[selected]}
      ></DisplayAnecdote1>
      <Buttons
        handleVote={handleVote}
        handleSentence={handleSentence}
      ></Buttons>
      <DisplayAnecdote2
        anecdote={anecdotes[indexMaxVote]}
        maxVote={maxVote}
      ></DisplayAnecdote2>
    </div>
  );
}

export default App;
