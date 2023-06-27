import './App.css';
import React, {useState} from 'react';

function App() {
  const [question, setQuestion] = useState(1);
  const [completed, setCompleted] = useState(false);

  // const handleNextQuestion = () => {
  //   setQuestion(question + 1);
  // };
  const handleNextQuestion = () => {
    if (question < 8) {
      setQuestion(question + 1);
    } else {
      setCompleted(true);
    }
  };
  const handleStartOver = () => {
    setQuestion(1);
    setCompleted(false);
  };
  const lastQuestion = () => {
    setQuestion(8);
  };

    const handleCuisineCategorySelection = (category) => {
    setCuisineCategory(category);
    setQuestion(6);
  };

  const handleCuisineSelection = (selection) => {
    setCuisineSelection(selection);
    setQuestion(7);
  };


  return (
    <div className="App">
      <header className="App-header">
        <p>BiteBuddy</p>
      </header>
      <div className='App-body'>
      {completed ? (
          <div>
            <p>Here is more information on [insert name of restaurant]</p>
            <div className="start-over-container">
              <button className="start-over-button" onClick={handleStartOver}>
                Start Over
              </button>
            </div>
          </div>
        ) : (
          <div>
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
            <p>How far do you want to go?</p>
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
              <button className='myButton' onClick={() => handleCuisineCategorySelection('Asian')}> Asian</button>
              <button className='myButton' onClick={() => handleCuisineCategorySelection('Mediterranean')}>Mediterranean</button>
              <button className='myButton' onClick={() => handleCuisineCategorySelection('Western')}>Western</button>
              <button className='myButton' onClick={() => handleCuisineCategorySelection('Latin American')}>Latin American</button>
              <button className='myButton' onClick={() => handleCuisineCategorySelection('African')}>African</button>
              <button className='myButton' onClick={handleNextQuestion}>Surprise me</button>
            </p>
          </div>
        )}
        {question === 6 && cuisineCategory === 'Asian' && (
          <div>
            <p>Specify the cuisine you are craving</p>
            <p>
              <button className='myButton' onClick={() => handleCuisineSelection('Chinese')}>Chinese</button>
              <button className='myButton' onClick={() => handleCuisineSelection('Japanese')}>Japanese</button>
              <button className='myButton' onClick={() => handleCuisineSelection('Korean')}>Korean</button>
              <button className='myButton' onClick={() => handleCuisineSelection('Thai')}>Thai</button>
              <button className='myButton' onClick={() => handleCuisineSelection('Vietnamese')}>Vietnamese</button>
              <button className='myButton' onClick={() => handleCuisineSelection('Indian')}>Indian</button>
              <button className='myButton' onClick={() => handleCuisineSelection('Malaysian')}>Malaysian</button>
              <button className='myButton' onClick={() => handleCuisineSelection('Filipino')}>Filipino</button>
              <button className='myButton' onClick={() => handleCuisineSelection('Singaporean')}>Singaporean</button>
              <button className='myButton' onClick={() => handleCuisineSelection('Taiwanese')}>Taiwanese</button>
              <button className='myButton' onClick={() => handleCuisineSelection('Cambodian')}>Cambodian</button>
              <button className='myButton' onClick={() => handleCuisineSelection('Burmese')}>Burmese</button>
              <button className='myButton' onClick={() => handleCuisineSelection('Nepalese')}>Nepalese</button>
              <button className='myButton' onClick={() => handleCuisineSelection('Sri Lankan')}>Sri Lankan</button>
              <button className='myButton' onClick={() => handleCuisineSelection('Pakistani')}>Pakistani</button>
              <button className='myButton' onClick={() => handleCuisineSelection('Bangladeshi')}>Bangladeshi</button>             
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
                <p>
                  <button className="myButton" onClick={handleNextQuestion}> Yes!</button>
                  <button className="myButton"> Give me another option </button>
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
