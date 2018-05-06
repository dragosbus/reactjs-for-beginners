import React, { Component } from 'react';
import './../App.css';

export class QuizOptions extends Component {
    render() {
        return (
            <div className="fields">{this.props.option}</div>
        );
    }
}