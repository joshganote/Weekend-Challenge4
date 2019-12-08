import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <p>Gallery goes here</p>
        <img src="images/mid.png" alt="TheMidnightBand"/>
        <img src="images/squad.png" alt="Friends"/>
        <img src="images/fam.png" alt="Family"/><br></br>
        <img src="images/guitar.png" alt="Guitar"/>
        <img src="images/momz.png" alt="Mom"/>
        <img src="images/studio.png" alt="Studio"/><br></br>
        <img src="images/work.png" alt="Work"/>
        <img src="images/album.png" alt="Album"/>
        <img src="images/RR.2.png" alt="RR"/>

      </div>
    );
  }
}

export default App; 