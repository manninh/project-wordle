import React from "react";

import { range } from "../../utils";
import Guess from "../Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessResults({ guesses, answer }) {
  return (
    <>
      <div className="guess-results">
        {range(0, NUM_OF_GUESSES_ALLOWED).map((idx) => (
          <Guess
            key={idx}
            guess={guesses[idx] ?? undefined}
            answer={answer}
          ></Guess>
        ))}
      </div>
    </>
  );
}

export default GuessResults;
