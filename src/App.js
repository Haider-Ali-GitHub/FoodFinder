import './App.css';
import React, {useState} from 'react';
import './images/hello.png';

function App() {
  const [question, setQuestion] = useState(1);

  const handleNextQuestion = () => {
    setQuestion(question + 1);
  };
  const lastQuestion = () => {
    setQuestion(8);
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
              <button className='myButton' onClick={handleNextQuestion}>[insert location]</button>
            </p>
          </div>
        )}
        {question === 2 && (
          <div>
            <p>Surprise me or question game?</p>
            <p>
              <button className='myButton' onClick={lastQuestion}>Surprise me</button>
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
        {question === 7 && (
          <div>
            <p>What dining option do you prefer?</p>
            <p>
              <button className='myButton' onClick={handleNextQuestion}>Dine In</button>
              <button className='myButton' onClick={handleNextQuestion}>Drive Thru</button>
              <button className='myButton' onClick={handleNextQuestion}>Delivery</button>
            </p>
          </div>
        )}
        {question === 8 && (
          <div>
            <p>Is this where you want to eat?</p>
            <div>
            <img src="hello.png" alt="location"></img>
            </div>
            <p>
              <button className='myButton' onClick={handleNextQuestion}>Yes!</button>
              <button className='myButton'> Give me another option</button>
            </p>
          </div>
        )}
        {question === 9 && (
          <div>
            <p>Here is more information on [insert name of restaurant]</p>
          </div>
        )}
        </div>
    </div>
  );
}

export default App;
