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

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount() {
    this.timeID = setInterval(() => {
      this.setState({
        date: new Date()
      });
    },1000);
  }
  
  componentWillUnmount() {
    clearInterval(this.timeID);
  }
  render() {
    return <p>The time is: {this.state.date.toLocaleTimeString()}</p>
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Clock/>
      </div>
    );
  }
}

export default App;
