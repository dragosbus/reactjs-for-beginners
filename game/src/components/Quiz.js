import React, { Component } from 'react';
import { QuizOptions } from './QuizOptions';
import './../App.css';


export class Quiz extends Component {

    constructor(props) {
        super(props);
        let riddle = this.playGame();
        this.state = { riddle };
    }

    randomNumber(max, min) {
        return Math.floor(Math.random() * (max- min + 1)) + min;
    }

    playGame() {
        let field1 = this.randomNumber(20, 50);
        let field2 = this.randomNumber(20, 50);
        let result = field1 + field2;

        let riddle = {
            resultsArr: [8, 9, 10, 11],
            field1,
            field2,
            result
        };
        console.log(riddle);
        return riddle;
    }

    render() {
        return (
            <div className="quiz">
                <div className="quiz-content">
                    <p className="question">
                        What is the sum of 5+5?
                    </p>
                    <div className="options">
                        {this.state.riddle.resultsArr.map((v, i) => <QuizOptions key={i} option={v}/>)}
                    </div>
                </div>
                <div className="play-again">
                    <a className="button">Play Again</a>
                </div>
            </div>
        );
    }
}