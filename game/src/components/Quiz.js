import React, { Component } from 'react';


export class Quiz extends Component {
    render() {
        return (
            <div className="quiz">
                <div className="quiz-content">
                    <p className="question">
                        What is the sum of 5+5?
                    </p>
                    <div className="options">
                        <div className="fields">10</div>
                        <div className="fields">20</div>
                        <div className="fields">30</div>
                        <div className="fields">40</div>
                    </div>
                </div>
                <div className="play-again">
                    <a className="button">Play Again</a>
                </div>
            </div>
        );
    }
}