import React from "react";

function ResultBanner({ guesses, answer, hasCorrectAnswer }) {
  return hasCorrectAnswer ? (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong> {guesses.length} guesses</strong>.
      </p>
    </div>
  ) : (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>
  );
}

export default ResultBanner;
