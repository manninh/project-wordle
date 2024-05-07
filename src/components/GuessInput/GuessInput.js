import React from "react";

function GuessInput({ guesses, setGuesses }) {
  const [currentGuess, setCurrentGuess] = React.useState("");

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
        }
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        value={currentGuess}
        id="guess-input"
        type="text"
        onChange={(e) => onUpdateGuess(e.target.value)}
      ></input>
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
