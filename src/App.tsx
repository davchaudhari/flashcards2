import React, { useState } from 'react';
import Flashcard from './FlashCard';
import './App.css';
import "./FlashCard.css"

function App() {
  const [cards, setCards] = useState([
    { question: 'Who is the former President running for the Republican Party Nomination?', answer: 'Donald Trump' },
    { question: 'How is the current President running for the Democratic Party Nomination?', answer: 'President Joe Biden' },
    { question: 'What month will the 2024 election take place?', answer: 'November' },
    { question: 'Who is the primary challenger against Donald Trump who was also the Governor of South Carolina?', answer: 'Nikki Haley' },
    { question: 'How long does the US Presidency last?', answer: '4 years' },
    { question: 'How many terms can a president run concurrently?', answer: '2 times' },
    { question: 'What are the two chambers of Congress?', answer: 'Senate and the House' },
    { question: 'Who was the original representative of the Republican Party at its inception?', answer: 'Abraham Lincoln' },
  ]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [isFlipped, setIsFlipped] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  const checkAnswer = () => {
    const correct = cards[currentCardIndex].answer.toLowerCase() === userAnswer.toLowerCase();
    setIsCorrect(correct);
    setIsFlipped(true);
  };

  const showNextCard = () => {
    setCurrentCardIndex((currentCardIndex + 1) % cards.length);
    setIsFlipped(false);
    setIsCorrect(null);
    setUserAnswer('');
  };

  const showPreviousCard = () => {
    setCurrentCardIndex((currentCardIndex - 1 + cards.length) % cards.length);
    setIsFlipped(false);
    setIsCorrect(null);
    setUserAnswer('');
  };

  return (
    <div className="app">
      <h1>Test your Knowledge of US Politics!</h1>
      <p>This flashcard set has some relevant facts about the US political structure and process.</p>
      <p>Number of Cards: {cards.length}</p>
      <Flashcard card={cards[currentCardIndex]} isFlipped={isFlipped} isCorrect={isCorrect} onClick={flipCard} />
      {!isFlipped && (
        <>
          <input type="text" value={userAnswer} onChange={(e) => setUserAnswer(e.target.value)} />
          <button onClick={checkAnswer}>Submit Answer</button>
        </>
      )}
      <button onClick={showPreviousCard}>Previous Card</button>
      <button onClick={showNextCard}>Next Card</button>
    </div>
  );
}

export default App;

