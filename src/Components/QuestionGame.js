import React from 'react';

function GameQuestion({ handleNextQuestion, lastQuestion }) {
  return (
    <div>
      <p>Surprise me or question game?</p>
      <p>
        <button className='myButton' onClick={lastQuestion}>Surprise me</button>
        <button className='myButton' onClick={handleNextQuestion}>Play the question game</button>
      </p>
    </div>
  );
}

export default GameQuestion;
