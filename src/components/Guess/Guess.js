import React from "react";

import { checkGuess } from "../../game-helpers";

function Guess({ guess, answer }) {
  const emptyLetters = ["", "", "", "", ""];
  const [guessLetters, guessKey] =
    guess !== undefined
      ? [guess.guess.split(""), guess.key]
      : [emptyLetters, crypto.randomUUID()]; // this is sub-optimal as new UUID is generated on each re-render for empty rows

  const missingGuessResult = [
    { letter: "", status: undefined },
    { letter: "", status: undefined },
    { letter: "", status: undefined },
    { letter: "", status: undefined },
    { letter: "", status: undefined },
  ];
  const guessResults =
    guess !== undefined ? checkGuess(guess.guess, answer) : missingGuessResult;

  return (
    <>
      <p className="guess" key={guessKey}>
        {guessResults.map((charResult, index) => (
          <span
            className={charResult.status ? `cell ${charResult.status}` : "cell"}
            key={index}
          >
            {charResult.letter}
          </span>
        ))}
      </p>
    </>
  );
}

export default Guess;
