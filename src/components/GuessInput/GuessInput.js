import React from "react";

function GuessInput() {
  const [guess, setGuess] = React.useState({ guess: "" });

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault();
        if (guess.guess.length === 5) {
          console.log(guess);
          setGuess({ guess: "" });
        }
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        value={guess.guess}
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
    setGuess({ guess: guessInput.toUpperCase() });
  }
}

export default GuessInput;
