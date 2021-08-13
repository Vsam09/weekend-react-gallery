import React from 'react';
import './App.css';

function App() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
        <button>Like</button>
        <img src ="images/lake.jpg" width="150" height="150"/>
        <button>Like</button>
        <img src="images/sunset.jpg" width="150" height="150"/>
        <button>Like</button>

      </div>
    );
}

export default App;
