import { useState } from "react";
import Results from "./Results";

function Quiz() {
  const questionBank = [
    {
      question: "What is the capital of China?",
      options: ["Seoul", "Singapore", "Shanghai", "Beijing"],
      answer: "Beijing",
    },
    {
      question: "What is the third best-selling book of all time?",
      options: ["King James Bible", "Don Quixote", "Holy Quran", "One Piece"],
      answer: "Don Quixote",
    },
    {
      question: "Which is NOT part of the new seven wonders of the world?",
      options: [
        "Great Pyramid of Giza",
        "Great Wall of China",
        "Chichén Itzá",
        "Taj Mahal",
      ],
      answer: "Great Pyramid of Giza",
    },
    {
      question: "What is the largest country in the world by area?",
      options: ["Russia", "Canada", "China", "USA"],
      answer: "Russia",
    },
    {
      question: "What is the name of Son Goku's brother? (Dragon Ball)",
      options: ["Vegeta", "Gohan", "Broly", "Raditz"],
      answer: "Raditz",
    },
    {
      question: "Who is the third member of the Straw Hat Crew? (One peice)",
      options: ["Brook", "Zoro", "Sanji", "Nami"],
      answer: "Nami",
    },
    {
      question:
        "Who is the second member of the Phatom troupe? (Hunter x Hunter)",
      options: ["Chrollo", "Nobunaga", "Feitan", "Uvogin"],
      answer: "Feitan",
    },
    {
      question: "Who is the third ranked at the end of the NEL? (Blue lock)",
      options: ["Bashira", "Reo", "Barou", "Shidou"],
      answer: "Shidou",
    },
    {
      question: "Who is Yugi's main rival? (Yu-Gi-Oh!)",
      options: ["Kahiba", "Pegasus", "Yami", "Dartz"],
      answer: "Kahiba",
    },
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const initialAnswers = [null, null, null, null, null, null, null, null, null];
  const [userAnswers, setUserAnswers] = useState(initialAnswers);
  const selectedAnswer = userAnswers[currentQuestion];

  const [isQuizFinished, setIsQuizFinished] = useState(false);

  function handleOptionSelection(option) {
    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestion] = option;

    setUserAnswers(newUserAnswers);
  }

  function goToNext() {
    if (currentQuestion === questionBank.length - 1) {
      setIsQuizFinished(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  }
  function goToPrev() {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  }

  function restartQuiz() {
    setCurrentQuestion(0);
    setUserAnswers(initialAnswers);
    setIsQuizFinished(false);
  }

  if (isQuizFinished) {
    return (
      <Results
        questionBank={questionBank}
        userAnswers={userAnswers}
        restartQuiz={restartQuiz}
      />
    );
  }

  return (
    <div>
      <h2>Question {currentQuestion + 1}</h2>
      <p className="question">{questionBank[currentQuestion].question}</p>
      {questionBank[currentQuestion].options.map((option) => (
        <button
          className={"option" + (selectedAnswer === option ? " selected" : "")}
          onClick={() => handleOptionSelection(option)}
        >
          {option}
        </button>
      ))}

      <div className="nav-buttons">
        <button onClick={goToPrev} disabled={currentQuestion === 0}>
          {" "}
          Previous{" "}
        </button>
        <button onClick={goToNext} disabled={!selectedAnswer}>
          {currentQuestion === questionBank.length - 1 ? "Finish Quiz" : "Next"}
        </button>
      </div>
    </div>
  );
}

export default Quiz;
