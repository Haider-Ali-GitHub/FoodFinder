import React from "react";

function FinalQuestion ({handleNextQuestion, handleStartOver}){
    return(
        <div>
        <p>Is this where you want to eat?</p>
        <p>
          <button className="myButton" onClick={handleNextQuestion}> Yes!</button>
          <button className="myButton"> Give me another option </button>
              <button className="myButton" onClick={handleStartOver}>
                Start Over
              </button>
        </p>
      </div>
    )
}
export default FinalQuestion;