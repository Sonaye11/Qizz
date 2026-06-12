function Results({ questionBank, userAnswers, restartQuiz }) {
  function getScore() {
    var finalScore = 0;
    userAnswers.forEach((answer, index) => {
      if (answer === questionBank[index].answer) {
        finalScore++;
      }
    });

    return finalScore;
  }

  const score = getScore();

  return (
    <div>
      <h2>Quiz Completed!</h2>
      <p>
        Your Score: {score}/{questionBank.length}
      </p>
      {score === 0 ? <p>NO BALL KNOWLEDGE!!!</p> : null}
      {score === questionBank.length ? <p>PERFECT BALL KNOWLEDGE!!!</p> : null}
      <button className="restart-button" onClick={restartQuiz}>
        Restart Quiz
      </button>
    </div>
  );
}

export default Results;
