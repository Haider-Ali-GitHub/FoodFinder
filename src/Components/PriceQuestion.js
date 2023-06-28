import React from "react";

function PriceQuestion({handleNextQuestion}){
    return(
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
    )
}

export default PriceQuestion;