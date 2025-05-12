import React, { useState } from 'react';

const Quiz = ({ questions, onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [userAnswers, setUserAnswers] = useState([]);
  
  const currentQuestion = questions[currentQuestionIndex];
  
  const handleOptionSelect = (optionIndex) => {
    setSelectedOption(optionIndex);
  };
  
  const handleNextQuestion = () => {
    // Save the user's answer
    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestionIndex] = selectedOption;
    setUserAnswers(newUserAnswers);
    
    // Reset selected option
    setSelectedOption(null);
    
    // Move to next question or complete quiz
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Quiz completed
      onComplete(newUserAnswers);
    }
  };
  
  return (
    <div className="quiz-container">
      <div>
        <p className="question-counter">
          Question {currentQuestionIndex + 1} of {questions.length}
        </p>
        <h2 className="question-text">{currentQuestion.question}</h2>
      </div>
      
      <div className="options-container">
        {currentQuestion.options.map((option, index) => (
          <div 
            key={index}
            onClick={() => handleOptionSelect(index)}
            className={`option ${selectedOption === index ? 'selected' : ''}`}
          >
            <div className="radio-button">
              {selectedOption === index && (
                <div className="radio-button-inner"></div>
              )}
            </div>
            <span>{option}</span>
          </div>
        ))}
      </div>
      
      <button
        onClick={handleNextQuestion}
        disabled={selectedOption === null}
        className="btn-next"
      >
        {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
      </button>
    </div>
  );
};

export default Quiz;
