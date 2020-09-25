import React from "react";

function Buttons({ handleVote, handleSentence }) {
  return (
    <section className="buttons">
      <button className="vote" onClick={handleVote}>
        vote
      </button>
      <button className="anecdote" onClick={handleSentence}>
        next anecdote
      </button>
    </section>
  );
}
export default Buttons;
