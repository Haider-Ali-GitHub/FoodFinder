import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          BiteBuddy      
        </p>
      </header>
      <div className='App-body'>
        <p>
          Where are you?
        </p>
        <p>
          <button className='myButton'>Your mom's house</button>
          <button className='myButton'>Your dad's house</button>
          <button className='myButton'>Your granny's house</button>
          <button className='myButton'>Your dog's house</button>
        </p>
        </div>
    </div>
  );
}

export default App;
