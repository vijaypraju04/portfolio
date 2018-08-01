import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <p>Hello World</p>
      </div>
    );
  }
}

export default App;
