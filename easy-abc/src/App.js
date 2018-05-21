import React, { Component } from 'react';
import alphabet from './alphabets.json';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      alphabet,
      tick: 0,
      checked: false
    }
    this.nextQuestion = this.nextQuestion.bind(this);
    this.prevQuestion = this.prevQuestion.bind(this);
    this.playLetterSound = this.playLetterSound.bind(this);
    this.toggleSound = this.toggleSound.bind(this);
  }

  toggleSound() {
    this.setState({
      checked: !this.state.checked
    });
  }

  playLetterSound() {
    let letterSound = document.querySelector('.letter-sound');
    let wordSound = document.querySelector('.word-sound');
    
    if (!this.state.checked) {
      if (this.state.tick < 2) {
        letterSound.play();
      } else {
        wordSound.play();
      }
    }
  }

  componentDidMount() {
    this.playLetterSound();
  }

  componentDidUpdate() {
    this.playLetterSound();
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
      tick: this.state.tick - 1
    });

    if (this.state.tick === 0) {
      this.setState({
        index: this.state.index < 1 ? this.state.alphabet.length - 1 : this.state.index - 1,
        tick: 0
      });
    }
  }

  render() {
    return (
      <div className="app">
        <input type="checkbox" checked={this.state.checked} onClick={this.toggleSound}/>  
        <div className="letter">
          {this.state.alphabet[this.state.index].letter}
          <audio className="letter-sound" src={this.state.alphabet[this.state.index].letterSound}></audio>
        </div>
        <div className="controller">
          <button className="prev" onClick={this.prevQuestion}>Previous</button>
          <button className="sound" onClick={this.playLetterSound}>Play sound Again</button>
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
            <audio className="word-sound" src={this.state.alphabet[this.state.index].wordSound}></audio>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
