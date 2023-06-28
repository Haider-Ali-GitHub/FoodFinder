import React from "react";

function FinalQuestion ({handleNextQuestion}){
    return(
        <div>
        <p>Is this where you want to eat?</p>
        <p>
          <button className="myButton" onClick={handleNextQuestion}> Yes!</button>
          <button className="myButton"> Give me another option </button>
        </p>
      </div>
    )
}
export default FinalQuestion;