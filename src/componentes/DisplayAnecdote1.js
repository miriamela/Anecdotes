import React from "react";

function DisplayAnecdote1({ anecdotes, vote }) {
  return (
    <section className="showAnecdote">
      <p className="text">{anecdotes}</p>
      <p>It has {vote} vote</p>
    </section>
  );
}
export default DisplayAnecdote1;
