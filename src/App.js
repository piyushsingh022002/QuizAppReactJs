import React, { useState } from 'react';
import './App.css';
import quizData from './data/quizData.json';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Results from './components/Results';

function App() {
  const [screen, setScreen] = useState('home');
  const [userAnswers, setUserAnswers] = useState([]);

  const handleStartQuiz = () => {
    setScreen('quiz');
    setUserAnswers([]);
  };

  const handleQuizComplete = (answers) => {
    setUserAnswers(answers);
    setScreen('results');
  };

  const handleRestartQuiz = () => {
    setScreen('home');
    setUserAnswers([]);
  };

  return (
    <div className="App">
      {screen === 'home' && <Home onStartQuiz={handleStartQuiz} />}
      {screen === 'quiz' && <Quiz questions={quizData} onComplete={handleQuizComplete} />}
      {screen === 'results' && (
        <Results 
          questions={quizData} 
          userAnswers={userAnswers} 
          onRestart={handleRestartQuiz} 
        />
      )}
    </div>
  );
}

export default App;
