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
    this.nextQuestion = this.nextQuestion.bind(this);
    this.prevQuestion = this.prevQuestion.bind(this);
  }

  nextQuestion() {
    this.setState({
      index: this.state.index < this.state.alphabet.length - 1 ? this.state.index+1 : 0
    });
  }

  prevQuestion() {
    this.setState({
      index: this.state.index < 1 ? this.state.alphabet.length-1 : this.state.index - 1
    });
  }

  render() {
    return (
      <div className="app">
        <div className="letter">
          {this.state.alphabet[this.state.index].letter}
        </div>
        <div className="controller">
          <button className="prev" onClick={this.prevQuestion}>Previous</button>
          <button className="sound">Play sound Again</button>
          <button className="next" onClick={this.nextQuestion}>Next</button>
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
