import React from 'react';

const Home = ({ onStartQuiz }) => {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to the Quiz App</h1>
      <p className="home-description">
        Test your knowledge with this interactive quiz! Answer all the questions correctly to achieve a perfect score.
      </p>
      <button
        onClick={onStartQuiz}
        className="btn-primary"
      >
        Start Quiz
      </button>
    </div>
  );
};

export default Home;
