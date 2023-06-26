import './App.css';
import React, {useState} from 'react';

function App() {
  const [question, setQuestion] = useState(1);

  const handleNextQuestion = () => {
    setQuestion(question + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>BiteBuddy</p>
      </header>
      <div className='App-body'>
        {question === 1 && (
          <div>
            <p>Where are you?</p>
            <p>
              <button className='myButton' onClick={handleNextQuestion}>Your mom's house</button>
            </p>
          </div>
        )}
        {question === 2 && (
          <div>
            <p>Surprise me or question game?</p>
            <p>
              <button className='myButton' onClick={handleNextQuestion}>Surprise me</button>
              <button className='myButton' onClick={handleNextQuestion}>Play the question game</button>
            </p>
          </div>
        )}
        {question === 3 && (
          <div>
            <p>How far do you wanna go?</p>
            <p>
              <button className='myButton' onClick={handleNextQuestion}>5 mi</button>
              <button className='myButton' onClick={handleNextQuestion}>10 mi</button>
              <button className='myButton' onClick={handleNextQuestion}>15 mi</button>
              <button className='myButton' onClick={handleNextQuestion}>20 mi</button>
              <button className='myButton' onClick={handleNextQuestion}>Surprise me</button>
            </p>
          </div>
        )}
        {question === 4 && (
          <div>
            <p>What is your price range?</p>
            <p>
              <button className='myButton' onClick={handleNextQuestion}>$</button>
              <button className='myButton' onClick={handleNextQuestion}>$$</button>
              <button className='myButton' onClick={handleNextQuestion}>$$$</button>
              <button className='myButton' onClick={handleNextQuestion}>$$$$</button>
              <button className='myButton' onClick={handleNextQuestion}>Surprise me</button>
            </p>
          </div>
        )}
        {question === 5 && (
          <div>
            <p>What cuisine are you in the mood for?</p>
            <p>
              <button className='myButton' onClick={handleNextQuestion}>Asian</button>
              <button className='myButton' onClick={handleNextQuestion}>Mediterranean</button>
              <button className='myButton' onClick={handleNextQuestion}>Western</button>
              <button className='myButton' onClick={handleNextQuestion}>Latin American</button>
              <button className='myButton' onClick={handleNextQuestion}>African</button>
              <button className='myButton' onClick={handleNextQuestion}>Surprise me</button>
            </p>
          </div>
        )}
        {question === 6 && (
          <div>
            <p>Specify the cuisine you are craving</p>
            <p>
              <button className='myButton' onClick={handleNextQuestion}>Asian</button>
              <button className='myButton' onClick={handleNextQuestion}>Mediterranean</button>
              <button className='myButton' onClick={handleNextQuestion}>Western</button>
              <button className='myButton' onClick={handleNextQuestion}>Latin American</button>
              <button className='myButton' onClick={handleNextQuestion}>African</button>
              <button className='myButton' onClick={handleNextQuestion}>Surprise me</button>
            </p>
          </div>
        )}
        </div>
    </div>
  );
}

export default App;
