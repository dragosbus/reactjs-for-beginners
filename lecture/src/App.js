import React, { Component } from 'react';
import './App.css';

var style = {
  
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerText: 'First React App'
    };
  }
  render() {
    return (
      <header className="main-header">
        <h1>{this.state.headerText}</h1>
      </header>
    );
  }
}

class Main extends Component {
  render() {
    return (
      <main>
        <p>This is my first react app</p>
      </main>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
