import React from "react";

function Guess({ guess }) {
  const emptyLetters = ["", "", "", "", ""];
  const [guessLetters, guessKey] =
    guess !== undefined
      ? [guess.guess.split(""), guess.key]
      : [emptyLetters, crypto.randomUUID()]; // this is sub-optimal as new UUID is generated on each re-render for empty rows

  return (
    <>
      <p className="guess" key={guessKey}>
        {guessLetters.map((char, index) => (
          <span className="cell" key={index}>
            {char}
          </span>
        ))}
      </p>
    </>
  );
}

export default Guess;
