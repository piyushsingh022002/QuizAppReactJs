import React from 'react';

const Results = ({ questions, userAnswers, onRestart }) => {
  // Calculate the score
  const correctAnswers = userAnswers.filter(
    (answer, index) => answer === questions[index].correctAnswer
  );
  
  const score = correctAnswers.length;
  const totalQuestions = questions.length;
  const percentage = Math.round((score / totalQuestions) * 100);
  
  // Determine the color based on percentage
  const getScoreColor = () => {
    if (percentage >= 70) return '#4caf50'; // Green
    if (percentage >= 40) return '#ff9800'; // Orange
    return '#f44336'; // Red
  };
  
  return (
    <div className="results-container">
      <h1 className="results-title">Quiz Results</h1>
      
      <div className="score-circle">
        <svg viewBox="0 0 36 36">
          <path
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="#E5E7EB"
            strokeWidth="3"
            strokeDasharray="100, 100"
          />
          <path
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke={getScoreColor()}
            strokeWidth="3"
            strokeDasharray={`${percentage}, 100`}
          />
        </svg>
        <div className="score-text">{percentage}%</div>
      </div>
      
      <p className="score-info">
        You got <strong>{score}</strong> out of <strong>{totalQuestions}</strong> questions correct!
      </p>
      
      <p className="score-message">
        {percentage >= 80 
          ? "Excellent! You're a quiz master!" 
          : percentage >= 60 
          ? "Good job! You know your stuff." 
          : percentage >= 40 
          ? "Not bad, but there's room for improvement." 
          : "Keep studying and try again!"}
      </p>
      
      <button
        onClick={onRestart}
        className="btn-primary"
      >
        Restart Quiz
      </button>
    </div>
  );
};

export default Results;
