import React, { Component } from 'react';


const players = [
    {
        name: "Dragos",
        score: 0
    },
    {
        name: "Mihail",
        score: 0
    }
];

class Main extends Component {
    render() {
        return (
            <main>
                <Players/>
            </main>  
        );
    }
}

class Players extends Component {
    
    render() {
        return (
          <div>
                {players.map((player, id) => <Player key={id} name={player.name} score={player.score}/>)}
          </div>  
        );
    }
}

class Player extends Component {
    
    render() {
        return (
            <div className="player">
                <p className="name">{this.props.name}</p>
                <button className="increment">+</button>
                <p className="score">{this.props.score}</p>
                <button className="decrement">-</button>
            </div> 
        );
    }
}

export default Main;