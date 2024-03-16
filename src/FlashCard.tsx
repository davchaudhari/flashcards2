import React from 'react';
import './FlashCard.css';

function Flashcard({ card, isFlipped, isCorrect, onClick }:any) {
  const answerClass = isCorrect === null ? '' : isCorrect ? 'correct' : 'incorrect';

  return (
    <div className={`flashcard ${isFlipped ? 'flipped' : ''}`} onClick={onClick}>
      {isFlipped ? (
        <div>
          <div className={`answer ${answerClass}`}>
            {card.answer}
          </div>
          {isCorrect !== null && (
            <div className="feedback">
              {isCorrect ? 'Correct!' : 'Incorrect!'}
            </div>
          )}
        </div>
      ) : (
        card.question
      )}
    </div>
  );
}

export default Flashcard;



