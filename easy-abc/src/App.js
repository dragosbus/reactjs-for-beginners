import React, { Component } from 'react';
import alphabet from './alphabets.json';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      alphabet
    }
  }

  render() {
    return (
      <div className="app">
        <div className="letter">
          {this.state.alphabet[this.state.index].letter}
        </div>
        <div className="controller">
          <button className="prev">Previous</button>
          <button className="sound">Play sound Again</button>
          <button className="next">Next</button>
        </div>
        <div className="field-block">
          <div className="field">Click next to view image</div>
          <div className="field">Click next to view spelling</div>
        </div>
      </div>
    );
  }
}

export default App;
