import React, { Component } from 'react';


class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valueInput: '',
            valueTextArea: '',
            option: 'All'
        }
        this.changeInputHandler = this.changeInputHandler.bind(this);
        this.changeTextAreaHandler = this.changeTextAreaHandler.bind(this);
        this.selectArea = this.selectArea.bind(this);
    }

    changeInputHandler(e) {
        this.setState({
            valueInput: e.target.value
        });
        console.log(this.state.valueInput);
    }

    changeTextAreaHandler(e) {
        this.setState({
            valueTextArea: e.target.value
        });
        console.log(this.state.valueTextArea);
    }

    selectArea(e) {
        console.log(this.state.option);
        this.setState({
            option: e.target.value
        });
        
    }

    render() {
        return (
            <form>
                <InputText value={this.state.valueInput} changeInputHandler={this.changeInputHandler}/>
                <TextArea value={this.state.valueTextArea} changeTextAreaHandler={this.changeTextAreaHandler}/>
                <SelectArea selectArea={this.selectArea}/>
            </form>
        );
    }
}

class InputText extends Component {
    render() {
        return (
            <input type="text" value={this.props.value} onChange={this.props.changeInputHandler}/>
        );
    }
}

class TextArea extends Component {
    render() {
        return (
            <textarea value={this.props.valueTextArea} onChange={this.props.changeTextAreaHandler}></textarea>
        );
    }
}

class SelectArea extends Component {
    render() {
        return (
            <select onChange={this.props.selectArea}>
                <option value="All">All</option>
                <option value="phones">Phones</option>
                <option value="tablets">Tablets</option>
                <option value="pc">Computers</option>
            </select>
        );
    }
}

export default Form;