import './App.css';
import React from 'react';

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
          <>
            <p>Where are you?</p>
            <p>
              <button className='myButton' onClick={handleNextQuestion}>Your mom's house</button>
              <button className='myButton' onClick={handleNextQuestion}>Your dad's house</button>
              <button className='myButton' onClick={handleNextQuestion}>Your granny's house</button>
              <button className='myButton' onClick={handleNextQuestion}>Your dog's house</button>
            </p>
          </>
        )}
        </div>
    </div>
  );
}

export default App;
