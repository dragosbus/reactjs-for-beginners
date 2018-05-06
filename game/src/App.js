import React, { Component } from 'react';
import {Quiz} from './components/Quiz';
import { Header } from './components/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Quiz/>
      </div>
    );
  }
}

export default App;
