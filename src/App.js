import React, { Component } from 'react';
import './App.css';
import Ticker from './components/Ticker.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Cryptocurrency Ticker</h1>
        </header>

        <Ticker />
      </div>
    );
  }
}

export default App;
