import React from "react";

function DiningQuestion({handleNextQuestion}){
    return(
        <div>
        <p>What dining option do you prefer?</p>
        <p>
          <button className='myButton' onClick={handleNextQuestion}>Dine In</button>
          <button className='myButton' onClick={handleNextQuestion}>Drive Thru</button>
          <button className='myButton' onClick={handleNextQuestion}>Delivery</button>
        </p>
      </div>
)
}
export default DiningQuestion;