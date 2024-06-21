import React, { useState, useEffect } from 'react';
import './App.css';

const questions = [
  {
    questionText: 'What is the capital of France?',
    answerOptions: [
      { answerText: 'New York', isCorrect: false },
      { answerText: 'London', isCorrect: false },
      { answerText: 'Paris', isCorrect: true },
      { answerText: 'Dublin', isCorrect: false },
    ],
  },
  {
    questionText: 'Who is CEO of Tesla?',
    answerOptions: [
      { answerText: 'Jeff Bezos', isCorrect: false },
      { answerText: 'Elon Musk', isCorrect: true },
      { answerText: 'Bill Gates', isCorrect: false },
      { answerText: 'Tony Stark', isCorrect: false },
    ],
  },
  {
    questionText: 'The iPhone was created by which company?',
    answerOptions: [
      { answerText: 'Apple', isCorrect: true },
      { answerText: 'Intel', isCorrect: false },
      { answerText: 'Amazon', isCorrect: false },
      { answerText: 'Microsoft', isCorrect: false },
    ],
  },
  {
    questionText: 'How many Harry Potter books are there?',
    answerOptions: [
      { answerText: '1', isCorrect: false },
      { answerText: '4', isCorrect: false },
      { answerText: '6', isCorrect: false },
      { answerText: '7', isCorrect: true },
    ],
  },
  {
    questionText: 'Which planet is known as the Red Planet?',
    answerOptions: [
      { answerText: 'Earth', isCorrect: false },
      { answerText: 'Mars', isCorrect: true },
      { answerText: 'Jupiter', isCorrect: false },
      { answerText: 'Saturn', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the largest ocean on Earth?',
    answerOptions: [
      { answerText: 'Atlantic Ocean', isCorrect: false },
      { answerText: 'Indian Ocean', isCorrect: false },
      { answerText: 'Arctic Ocean', isCorrect: false },
      { answerText: 'Pacific Ocean', isCorrect: true },
    ],
  },
  {
    questionText: 'Who wrote "To Kill a Mockingbird"?',
    answerOptions: [
      { answerText: 'Harper Lee', isCorrect: true },
      { answerText: 'Jane Austen', isCorrect: false },
      { answerText: 'Mark Twain', isCorrect: false },
      { answerText: 'J.K. Rowling', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the hardest natural substance on Earth?',
    answerOptions: [
      { answerText: 'Gold', isCorrect: false },
      { answerText: 'Iron', isCorrect: false },
      { answerText: 'Diamond', isCorrect: true },
      { answerText: 'Silver', isCorrect: false },
    ],
  },
  {
    questionText: 'Which country is known as the Land of the Rising Sun?',
    answerOptions: [
      { answerText: 'China', isCorrect: false },
      { answerText: 'Japan', isCorrect: true },
      { answerText: 'South Korea', isCorrect: false },
      { answerText: 'India', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the smallest country in the world?',
    answerOptions: [
      { answerText: 'Monaco', isCorrect: false },
      { answerText: 'Vatican City', isCorrect: true },
      { answerText: 'San Marino', isCorrect: false },
      { answerText: 'Liechtenstein', isCorrect: false },
    ],
  },
];
function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (selectedAnswer === null) {
        switch (event.key) {
          case '1':
            handleAnswerOptionClick(questions[currentQuestion].answerOptions[0].isCorrect, 0);
            break;
          case '2':
            handleAnswerOptionClick(questions[currentQuestion].answerOptions[1].isCorrect, 1);
            break;
          case '3':
            handleAnswerOptionClick(questions[currentQuestion].answerOptions[2].isCorrect, 2);
            break;
          case '4':
            handleAnswerOptionClick(questions[currentQuestion].answerOptions[3].isCorrect, 3);
            break;
          default:
            break;
        }
      } else if (event.key === 'Enter') {
        handleNextQuestion();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedAnswer, currentQuestion]);

  const handleAnswerOptionClick = (isCorrect, index) => {
    setSelectedAnswer(index);
    setIsCorrect(isCorrect);

    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedAnswer(null);
      setIsCorrect(null);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className='app'>
      {showScore ? (
        <div className='score-section'>
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className='question-text'>{questions[currentQuestion].questionText}</div>
          </div>
          <div className='answer-section'>
            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
              <button
                key={index}
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect, index)}
                className={
                  selectedAnswer === index
                    ? isCorrect
                      ? 'correct'
                      : 'incorrect'
                    : ''
                }
                disabled={selectedAnswer !== null}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
          {selectedAnswer !== null && (
            <button className='next-button' onClick={handleNextQuestion}>
              Next Question ➡︎
            </button>
          )}
          <div className='score-display'>Score: {score}</div>
        </>
      )}
    </div>
  );
}

export default App;
