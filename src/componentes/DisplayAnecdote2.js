import React from "react";

function DisplayAnecdote2({ anecdote, maxVote }) {
  return (
    <section className="mostVote">
      <h2>Anecdotes with most votes:</h2>
      <p className="text2">{anecdote}</p>
      <p>It has {maxVote} votes</p>
    </section>
  );
}
export default DisplayAnecdote2;
