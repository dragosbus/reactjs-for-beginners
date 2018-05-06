import React, { Component } from 'react';
import { QuizOptions } from './QuizOptions';
import './../App.css';


export class Quiz extends Component {

    constructor(props) {
        super(props);
        let riddle = {
            resultsArr: [8, 9, 10, 11],
            field1: 5,
            field2: 5,
            answer: 10
        };
        this.state = { riddle };
    }

    render() {
        return (
            <div className="quiz">
                <div className="quiz-content">
                    <p className="question">
                        What is the sum of 5+5?
                    </p>
                    <div className="options">
                        {this.state.riddle.resultsArr.map(v => <QuizOptions option={v}/>)}
                    </div>
                </div>
                <div className="play-again">
                    <a className="button">Play Again</a>
                </div>
            </div>
        );
    }
}