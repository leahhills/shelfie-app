import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-header-content">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Shelfie</h1>
          </div>
        </header>
        
        <div className="shelf-container">
          <div className="shelf-container-a">Shelf A</div>
          <div className="shelf-container-b">Shelf B</div>
          <div className="shelf-container-c">Shelf C</div>
          <div className="shelf-container-d">Shelf D</div>
        </div>

      </div>
    );
  }
}

export default App;
