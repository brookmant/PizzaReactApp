import React, { Component } from 'react';
import logo from './pizza-icon.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Pizza App</h2>
        </div>
        <p className="App-intro">
          My Pizza App Just Starting with React.js and Redux
        </p>
      </div>
    );
  }
}

export default App;
