import React, { Component } from 'react';


class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valueInput: '',
            valueTextArea: '',
            option: 'All',
            isChecked: true
        }
        this.changeInputHandler = this.changeInputHandler.bind(this);
        this.changeTextAreaHandler = this.changeTextAreaHandler.bind(this);
        this.selectArea = this.selectArea.bind(this);
        this.checkboxHandler = this.checkboxHandler.bind(this);
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

    checkboxHandler(e) {
        console.log(this.state.isChecked)
        this.setState({
            isChecked: e.target.checked
        });
    }

    render() {
        return (
            <form>
                <InputText value={this.state.valueInput} changeInputHandler={this.changeInputHandler}/>
                <TextArea value={this.state.valueTextArea} changeTextAreaHandler={this.changeTextAreaHandler}/>
                <SelectArea selectArea={this.selectArea} />
                <Boxes checked={this.state.isChecked} checkboxHandler={this.checkboxHandler}/>
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

class Boxes extends Component {
    
    render() {
        return (
            <div>
                <label style={{color: this.props.checked ? 'green' : 'red'}}>Are you going?</label>
                <input type="checkbox" checked={this.props.isChecked} onChange={this.props.checkboxHandler}/>
            </div>
        );
    }
}

export default Form;