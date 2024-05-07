import React from "react";

function GuessResults({ guesses }) {
  return (
    <>
      <div className="guess-results"></div>
      {guesses.map((guess) => (
        <p className="guess" key={guess.key}>
          {guess.guess}
        </p>
      ))}
    </>
  );
}

export default GuessResults;
