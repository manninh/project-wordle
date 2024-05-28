import React from "react";

import ResultBanner from "../ResultBanner/ResultBanner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessInput({ guesses, setGuesses, answer }) {
  const [currentGuess, setCurrentGuess] = React.useState("");
  const [numOfGuesses, setNumOfGuesses] = React.useState(0);

  // note: this is suboptimal as this is now calculated in two places
  const hasCorrectAnswer = guesses.some((guess) => guess.guess === answer);

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault();
        if (currentGuess.length === 5) {
          setGuesses([
            ...guesses,
            { guess: currentGuess, key: crypto.randomUUID() },
          ]);
          setCurrentGuess("");
          setNumOfGuesses(numOfGuesses + 1);
        }
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      {hasCorrectAnswer || numOfGuesses >= NUM_OF_GUESSES_ALLOWED ? (
        <>
          <ResultBanner
            guesses={guesses}
            answer={answer}
            hasCorrectAnswer={hasCorrectAnswer}
          ></ResultBanner>
          {/* hack: force invisible id component to not break styling */}
          <input id="guess-input" style={{ border: 0 }}></input>
        </>
      ) : (
        <input
          value={currentGuess}
          id="guess-input"
          type="text"
          onChange={(e) => onUpdateGuess(e.target.value)}
        ></input>
      )}
    </form>
  );

  function onUpdateGuess(guessInput) {
    if (guessInput.length > 5) {
      return;
    }
    setCurrentGuess(guessInput.toUpperCase());
  }
}

export default GuessInput;
