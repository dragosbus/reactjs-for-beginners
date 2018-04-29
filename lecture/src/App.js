import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Main/>
      </div>
    );
  }
}

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerText: "Welcome to React"
    }
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
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      count: 0,
      number: 0
    }
    this.updateState = this.updateState.bind(this);
    this.forceUpdateRandom = this.forceUpdateRandom.bind(this);
    this.findMyDOMNode = this.findMyDOMNode.bind(this);
    this.setNewNumber = this.setNewNumber.bind(this);
  }

  updateState() {
    let item = `Click-${this.state.count}`;
    let arr = [];
    arr.push(item);
    this.setState({
      data: arr,
      count: this.state.count + 1
    });
  }

  forceUpdateRandom() {
    this.forceUpdate();
  }

  findMyDOMNode() {
    let myHeading = document.querySelector('.heading4');
    ReactDOM.findDOMNode(myHeading).style.color = 'red';
  }

  setNewNumber() {
    this.setState({
      number: this.state.number + 1
    });
  }

  render() {
    return (
      <main>
        <h2>ReactJS for beginners</h2>
        <h3>Components API</h3>
        <button onClick={this.updateState}>Click</button>
        <h4>State Data: {this.state.data}</h4>
        <button onClick={this.forceUpdateRandom}>Random Number</button>
        <h4>Random Number: {Math.random()}</h4>
        <button onClick={this.findMyDOMNode}>FidDOM</button>
        <h4 className="heading4">My heading</h4>
        <NumberComponent number={this.state.number} setNewNumber={this.setNewNumber}/>
      </main>
    );
  }
}

class NumberComponent extends Component {
  componentWillMount() {
    console.log('Compo will mount')
  }
  componentDidMount() {
    console.log('COmpo did mount')
  }
  componentWillReceiveProps() {
    console.log('Will receive props');
  }
  render() {
    return (
      <div>
        <button onClick={()=>this.props.setNewNumber()}>Update Number</button>
        <h4>{this.props.number}</h4>
      </div>
    );
  }
}

export default App;
