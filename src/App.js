import './App.css';
import React, {useState} from 'react';

function App() {
  const [question, setQuestion] = useState(1);
  const [completed, setCompleted] = useState(false);
  const [cuisineCategory, setCuisineCategory] = useState(null);
  const [cuisineSelection, setCuisineSelection] = useState(null);

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
    setCuisineCategory(null);
    setCuisineSelection(null);
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
        {question === 6 && cuisineCategory === 'Mediterranean' && (
          <div>
            <p>Specify the cuisine you are craving</p>
            <p>
              <button className='myButton' onClick={() => handleCuisineSelection('Greek')}>Greek</button>
              <button className='myButton' onClick={() => handleCuisineSelection('Italian')}>Italian</button>
              <button className='myButton' onClick={() => handleCuisineSelection('Korean')}>Korean</button>
              <button className='myButton' onClick={() => handleCuisineSelection('Spanish')}>Spanish</button>
              <button className='myButton' onClick={() => handleCuisineSelection('French')}>French</button>
              <button className='myButton' onClick={() => handleCuisineSelection('Turkish')}>Turkish</button>
              <button className='myButton' onClick={() => handleCuisineSelection('Lebanese')}>Lebanese</button>
              <button className='myButton' onClick={() => handleCuisineSelection('Moroccan')}>Moroccan</button>
              <button className='myButton' onClick={() => handleCuisineSelection('Egyptian')}>Egyptian</button>            
              <button className='myButton' onClick={handleNextQuestion}>Surprise me</button>
            </p>
          </div>
        )}
        {question === 6 && cuisineCategory === 'Western' && (
          <div>
            <p>Specify the cuisine you are craving</p>
            <p>
              <button className='myButton' onClick={() => handleCuisineSelection('American')}>American</button>
              <button className='myButton' onClick={() => handleCuisineSelection('British')}>British</button>
              <button className='myButton' onClick={() => handleCuisineSelection('Canadian')}>Canadian</button>
              <button className='myButton' onClick={() => handleCuisineSelection('Australian')}>Australian</button>
              <button className='myButton' onClick={() => handleCuisineSelection('German')}>German</button>
              <button className='myButton' onClick={() => handleCuisineSelection('Dutch')}>Dutch</button>
              <button className='myButton' onClick={() => handleCuisineSelection('Belgian')}>Belgian</button>
              <button className='myButton' onClick={() => handleCuisineSelection('Irish')}>Irish</button>
              <button className='myButton' onClick={() => handleCuisineSelection('Scandinavian')}>Scandinavian</button>  
              <button className='myButton' onClick={() => handleCuisineSelection('Swiss')}>Swiss</button>          
              <button className='myButton' onClick={handleNextQuestion}>Surprise me</button>
            </p>
          </div>
        )}
        {question === 6 && cuisineCategory === 'Latin American' && (
          <div>
            <p>Specify the cuisine you are craving</p>
            <p>
              <button className='myButton' onClick={() => handleCuisineSelection('Mexican')}>Mexican</button>
              <button className='myButton' onClick={() => handleCuisineSelection('Brazilian')}>Brazilian</button>
              <button className='myButton' onClick={() => handleCuisineSelection('Peruvian')}>Peruvian</button>
              <button className='myButton' onClick={() => handleCuisineSelection('Colombian')}>Colombian</button>
              <button className='myButton' onClick={() => handleCuisineSelection('Venezuelan')}>Venezuelan</button>
              <button className='myButton' onClick={() => handleCuisineSelection('Cuban')}>Cuban</button>
              <button className='myButton' onClick={() => handleCuisineSelection('Chilean')}>Chilean</button>
              <button className='myButton' onClick={() => handleCuisineSelection('Ecuadorian')}>Ecuadorian</button>
              <button className='myButton' onClick={() => handleCuisineSelection('Dominican')}>Dominican</button>  
              <button className='myButton' onClick={() => handleCuisineSelection('Puerto Rican')}>Puerto Rican</button>          
              <button className='myButton' onClick={handleNextQuestion}>Surprise me</button>
            </p>
          </div>
        )}
        {question === 6 && cuisineCategory === 'African' && (
          <div>
            <p>Specify the cuisine you are craving</p>
            <p>
              <button className='myButton' onClick={() => handleCuisineSelection('Moroccan')}>Moroccan</button>
              <button className='myButton' onClick={() => handleCuisineSelection('Ethiopian')}>Ethiopian</button>
              <button className='myButton' onClick={() => handleCuisineSelection('Nigerian')}>Nigerian</button>
              <button className='myButton' onClick={() => handleCuisineSelection('Egyptian')}>Egyptian</button>
              <button className='myButton' onClick={() => handleCuisineSelection('South African')}>South African</button>
              <button className='myButton' onClick={() => handleCuisineSelection('Ghanaian')}>Ghanaian</button>
              <button className='myButton' onClick={() => handleCuisineSelection('Senegalese')}>Senegalese</button>
              <button className='myButton' onClick={() => handleCuisineSelection('Kenyan')}>Kenyan</button>
              <button className='myButton' onClick={() => handleCuisineSelection('Tanzanian')}>Tanzanian</button>  
              <button className='myButton' onClick={() => handleCuisineSelection('Algerian')}>Algerian</button>  
              <button className='myButton' onClick={() => handleCuisineSelection('Tunisian')}>Tunisian</button> 
              <button className='myButton' onClick={() => handleCuisineSelection('Malian')}>Malian</button>         
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
