import React, { Component } from 'react';
import './App.css';


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

class Paragraph extends Component {
  render() {
    return (
      <p>{this.props.text}</p>
    );
  }
}

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [1,2,3,4,5]
    }
  }
  render() {
    return (
      <main>
        {this.state.data.map((v, i) => <Paragraph text={v} key={i}/>)}
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
