import React from "react";
import '../App.js';
function CategoryQuestion ({handleCuisineSelection, handleNextQuestion, cuisineCategory}) {
  
    return(
        <div>
            {cuisineCategory === 'Asian' && (
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
        {cuisineCategory === 'Mediterranean' && (
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
        {cuisineCategory === 'Western' && (
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
        {cuisineCategory === 'Latin American' && (
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
        {cuisineCategory === 'African' && (
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
    </div>
    )
}
export default CategoryQuestion;