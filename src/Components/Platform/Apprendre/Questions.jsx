import React, { useState } from "react";

export default function Questions() {
  const [selectedOption, setSelectedOption] = useState("");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const questions = [
    {
      question: "Quelle est la principale source d'énergie renouvelable?",
      options: ["Pétrole", "Soleil", "Charbon"],
      correctAnswer: "Soleil",
    },
    {
      question: "L'énergie éolienne est produite par?",
      options: ["L'eau", "Le vent", "Le soleil"],
      correctAnswer: "Le vent",
    },
    {
      question: "Lequel de ces éléments est utilisé dans la production de l'énergie solaire?",
      options: ["Panneaux solaires", "Turbines", "Batteries"],
      correctAnswer: "Panneaux solaires",
    },
    {
      question: "L'énergie géothermique provient de?",
      options: ["La chaleur terrestre", "Le vent", "L'eau"],
      correctAnswer: "La chaleur terrestre",
    },
    {
      question: "Quel pays utilise le plus d'énergie éolienne?",
      options: ["Allemagne", "France", "Danemark"],
      correctAnswer: "Danemark",
    },
    {
      question: "L'énergie hydraulique est générée par?",
      options: ["Les vagues", "Les courants marins", "Les barrages"],
      correctAnswer: "Les barrages",
    },
    {
      question: "Quelle est la durée de vie moyenne d'un panneau solaire?",
      options: ["10 ans", "25 ans", "50 ans"],
      correctAnswer: "25 ans",
    },
    {
      question: "Quel est l'avantage principal des énergies renouvelables?",
      options: ["Elles sont gratuites", "Elles polluent", "Elles sont inépuisables"],
      correctAnswer: "Elles sont inépuisables",
    },
    {
      question: "Quelle est l'énergie la plus utilisée dans les maisons modernes?",
      options: ["Énergie solaire", "Énergie éolienne", "Énergie fossile"],
      correctAnswer: "Énergie fossile",
    },
    {
      question: "Les panneaux solaires sont principalement fabriqués à partir de quel matériau?",
      options: ["Plastique", "Verre", "Silicium"],
      correctAnswer: "Silicium",
    },
  ];

  function handleChange(event) {
    setSelectedOption(event.target.value);
  }

  function handleSubmit() {
    if (selectedOption === questions[questionIndex].correctAnswer) {
      setIsAnswerCorrect(true);
      setCorrectAnswers(correctAnswers + 1);
    } else {
      setIsAnswerCorrect(false);
    }

    setTimeout(() => {
      if (questionIndex < questions.length - 1) {
        setQuestionIndex(questionIndex + 1);
      } else {
        setQuizCompleted(true);
      }
      setIsAnswerCorrect(null);
      setSelectedOption("");
    }, 1000);
  }

  function restartQuiz() {
    setQuizCompleted(false);
    setCorrectAnswers(0);
    setQuestionIndex(0);
    setSelectedOption("");
  }

  return (
    <div className="uk-container uk-margin-top uk-padding">
      {!quizCompleted ? (
        <>
          <div className="uk-card uk-card-default uk-card-body uk-box-shadow-small">
            <h3 className="uk-text-center">{questions[questionIndex].question}</h3>
            {questions[questionIndex].options.map((option, index) => (
              <label key={index} className="uk-display-block uk-margin-small-top">
                <input
                  className="uk-radio"
                  type="radio"
                  name={`radio${questionIndex}`}
                  value={option}
                  checked={selectedOption === option}
                  onChange={handleChange}
                />
                <span className="uk-margin-small-left">{option}</span>
              </label>
            ))}
            <div className="uk-text-center uk-margin-small-top">
              <button
                className="uk-button uk-button-primary uk-width-1-1 uk-margin-small-top"
                onClick={handleSubmit}
                disabled={!selectedOption}
              >
                Soumettre
              </button>
            </div>
            {isAnswerCorrect !== null && (
              <div
                style={{
                  marginTop: "10px",
                  color: isAnswerCorrect ? "green" : "red",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {isAnswerCorrect ? "Bonne réponse!" : "Mauvaise réponse. Essayez encore!"}
              </div>
            )}
          </div>
        </>
      ) : (
        <div className="uk-card uk-card-default uk-card-body uk-box-shadow-small">
          <h3 className="uk-text-center">Félicitations!</h3>
          <p className="uk-text-center uk-margin-large-bottom">
            Vous avez répondu correctement à {correctAnswers} sur {questions.length} questions.
          </p>
          <p className="uk-text-center uk-margin-large-bottom">
            Vous avez obtenu {(correctAnswers / questions.length) * 100}% de bonnes réponses.
          </p>
          <div className="uk-text-center">
            <button
              className="uk-button uk-button-secondary uk-width-1-1"
              onClick={restartQuiz}
            >
              Recommencer
              <span className="uk-margin-small-left" ></span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
