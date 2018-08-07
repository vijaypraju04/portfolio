import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import Landing from './Components/Landing'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Landing />
        <p>Vijays Portfolio</p>
      </div>
    );
  }
}

export default App;
