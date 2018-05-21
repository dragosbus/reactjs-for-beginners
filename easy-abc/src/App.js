import React, { Component } from 'react';
import alphabet from './alphabets.json';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      alphabet,
      tick: 0
    }
    this.nextQuestion = this.nextQuestion.bind(this);
    this.prevQuestion = this.prevQuestion.bind(this);
  }

  nextQuestion() {
    this.setState({
      tick: this.state.tick + 1
    });

    if (this.state.tick === 2) {
      this.setState({
        index: this.state.index < this.state.alphabet.length - 1 ? this.state.index + 1 : 0,
        tick: 0
      });
    } 
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
          <div className="field">
            <span className={this.state.tick !== 0 ? "hide" : "show"}>Click next to view image</span>  
            <img className={this.state.tick >= 1 ? "show" : "hide"} src={this.state.alphabet[this.state.index].image} alt=""/>
          </div>
          <div className="field">
            <span className={this.state.tick > 1 ? "hide" : "show"}>Click next to view Spelling</span>   
            <p className={this.state.tick === 2 ? "show" : "hide"}>{this.state.alphabet[this.state.index].word}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
