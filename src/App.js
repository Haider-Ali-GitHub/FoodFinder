import './App.css';
import React, {useState} from 'react';
// import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';
import LocationQuestion from './Components/LocationQuestion';
import GameQuestion from './Components/QuestionGame';
import DistanceQuestion from './Components/DistanceQuestion';
import PriceQuestion from './Components/PriceQuestion';
import CuisineQuestion from './Components/CuisineQuestion';
import CategoryQuestion from './Components/CategoryQuestion';
import DiningQuestion from './Components/DiningQuestion';
import FinalQuestion from './Components/FinalQuestion';


function App() {
  const [question, setQuestion] = useState(1);
  const [completed, setCompleted] = useState(false);
  const [location, setLocation] = useState(null);
  // const [surpriseMe, setSurpriseMe] = useState(null);
  // const [distance, setDistance] = useState(null);
  // const [priceRange, setPriceRange] = useState(null);
  const [cuisineCategory, setCuisineCategory] = useState(null);
  const [
    // cuisineSelection, 
    setCuisineSelection] = useState(null);
  // const [diningOption, setDiningOption] = useState(null);

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

  const handleLocationSelection = (selectedLocation) => {
    setLocation(selectedLocation);
    setQuestion(2);
  };

  // const handleSurpriseMeSelection = (selectedOption) => {
  //   setSurpriseMe(selectedOption);
  //   if (selectedOption === 'Surprise me') {
  //     setQuestion(8);
  //   } else {
  //     setQuestion(3);
  //   }
  // };

  // const handleDistanceSelection = (selectedDistance) => {
  //   setDistance(selectedDistance);
  //   setQuestion(4);
  // };

  // const handlePriceRangeSelection = (selectedPriceRange) => {
  //   setPriceRange(selectedPriceRange);
  //   setQuestion(5);
  // };

  const handleCuisineCategorySelection = (selectedCategory) => {
    setCuisineCategory(selectedCategory);
    setQuestion(6);
  };

  const handleCuisineSelection = (selectedCuisine) => {
    setCuisineSelection(selectedCuisine);
    setQuestion(7);
  };

  // const handleDiningOptionSelection = (selectedOption) => {
  //   setDiningOption(selectedOption);
  //   setQuestion(8);
  // };
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
      <LocationQuestion 
        handleLocationSelection={handleLocationSelection} 
        handleNextQuestion={handleNextQuestion} 
        location={location} 
      />
    )}
    {question === 2 && (
      <GameQuestion 
        handleNextQuestion={handleNextQuestion} 
        lastQuestion={lastQuestion} 
      />
    )}
        {question === 3 && (
          <DistanceQuestion        
            handleNextQuestion={handleNextQuestion}
          />
        )}
        {question === 4 && (
          <PriceQuestion
            handleNextQuestion={handleNextQuestion}
          />
        )}
        {question === 5 && (
          <CuisineQuestion
            handleNextQuestion={handleNextQuestion}
            handleCuisineCategorySelection={handleCuisineCategorySelection}
          />
        )}
        {question === 6 && (
          <CategoryQuestion
          handleCuisineSelection={handleCuisineSelection}
          handleNextQuestion={handleNextQuestion}
          cuisineCategory={cuisineCategory}
          question={question}
          />
        )}
        {question === 7 && (
          <DiningQuestion
            handleNextQuestion={handleNextQuestion}
          />
        )}
            {question === 8 && (
              <FinalQuestion
                handleNextQuestion={handleNextQuestion}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;