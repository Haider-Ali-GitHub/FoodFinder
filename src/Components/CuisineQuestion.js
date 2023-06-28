import React from "react";

function CuisineQuestion({handleNextQuestion, handleCuisineCategorySelection}){
    return(
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

    )
}

export default CuisineQuestion;