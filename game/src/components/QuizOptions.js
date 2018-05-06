import React, { Component } from 'react';
import './../App.css';

export class QuizOptions extends Component {
    constructor(props) {
        super(props);
        this.callParentOptions = this.callParentOptions.bind(this);
    }

    callParentOptions() {
        this.props.checkResult(this.props.option);
    }

    render() {
        return (
            <div className="fields" onClick={this.callParentOptions}>{this.props.option}</div>
        );
    }
}