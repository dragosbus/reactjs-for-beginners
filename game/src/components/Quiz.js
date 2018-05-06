import React, { Component } from 'react';
import { QuizOptions } from './QuizOptions';
import './../App.css';


export class Quiz extends Component {

    constructor(props) {
        super(props);
        let riddle = this.playGame();
        let correct = false;
        let gameOver = false;
        this.state = { riddle };
        this.playGame = this.playGame.bind(this);
        this.checkResult = this.checkResult.bind(this);
    }

    checkResult(option) {
        if (this.state.riddle.result === option) {
            console.log('correct');
            this.setState({
                correct: true,
                gameOver: true
            });
        } else {
            console.log('wrong');
            this.setState({
                correct: false,
                gameOver: true
            });
        }
    }

    randomNumber(max, min) {
        return Math.floor(Math.random() * (max- min + 1)) + min;
    }

    generateRandomOptions(sum) {
        
        let resultsArr = [];
        let randomNumberArr = [];

        while (randomNumberArr.length <= 3) {
            let randomNumber = this.randomNumber(1, 19);
            if (randomNumberArr.includes(randomNumber)) {
                continue;
            } else {
                randomNumberArr.push(randomNumber);
            }
        }

        for (let i = 0; i < 3; i++) {
            let addSubtract = this.randomNumber(0, 1);
            let result = sum;
            if (addSubtract === 1) {
                //add the number
                result += randomNumberArr[i];
                resultsArr.push(result);
            } else {
                //subtract the number
                result -= randomNumberArr[i];
                resultsArr.push(result);
            }
        }

        return resultsArr;
    }

    playGame() {
        let field1 = this.randomNumber(20, 50);
        let field2 = this.randomNumber(20, 50);
        let result = field1 + field2;
        let resultsArr = this.generateRandomOptions(result);
        resultsArr.push(result);
        resultsArr.sort((a, b) => a - b);

        let riddle = {
            resultsArr,
            field1,
            field2,
            result
        };
        
        return riddle;
    }

    renderQuestion() {
        let field1 = this.state.riddle.field1;
        let field2 = this.state.riddle.field2;

        return (
            <p className="question">What is the sum of {field1} and {field2}?</p>
        );
    }


    renderOptions() {
        return (
            <div className="options">
                {this.state.riddle.resultsArr.map((v, i) => <QuizOptions key={i} option={v} checkResult={option => this.checkResult(option)}/>)}
            </div>
        );
    }

    render() {
        return (
            <div className="quiz">
                <div className="quiz-content">
                    {this.renderQuestion()}
                    {this.renderOptions()}
                </div>
                <div className="play-again">
                    <a className="button">Play Again</a>
                </div>
            </div>
        );
    }
}