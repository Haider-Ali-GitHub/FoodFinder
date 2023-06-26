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
              <button className='myButton' onClick={handleNextQuestion}>Your dad's house</button>
            </p>
          </div>
        )}
        </div>
    </div>
  );
}

export default App;
