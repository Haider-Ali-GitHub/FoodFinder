import React from "react";

function DistanceQuestion({handleNextQuestion}) {
return(
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

export default DistanceQuestion;