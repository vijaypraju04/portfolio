import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import Landing from './Components/Landing'
import Skills from './Components/Skills'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Landing />
        <p>Vijays Portfolio</p>
        Testing Again
      </div>
    );
  }
}

export default App;
