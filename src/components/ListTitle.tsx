import React, { Component } from 'react';
import { Input } from 'antd';

/**
 * Component that alerts if you click outside of it
 */
export default class ListTitle extends Component<{ list: any, updateName: any, placeholder?:string , displayInput?:boolean}, { displayInput: boolean, value: string }> {
    wrapperRef: any;
    constructor(props: any) {
        super(props);
        this.state = {
            displayInput: props.displayInput? props.displayInput : false,
            value: this.props.list.listName
        }
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.handleClicInSide = this.handleClicInSide.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handlePressEnter = this.handlePressEnter.bind(this);
    }
    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
        document.addEventListener('keypress', this.handlePressEnter);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
        document.removeEventListener('keypress', this.handlePressEnter);
    }

    handlePressEnter(event: any) {
        if (event.key === 'Enter') {
            this.setState({
                displayInput: false
            })
            this.props.updateName(this.state.value)

        }
    }
    handleClickOutside(event: any) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.setState({
                displayInput: false
            })
            this.props.updateName(this.state.value)
        }
    }

    handleClicInSide(refName: any, event: any) {
        this.wrapperRef = this.refs[refName];
        this.setState({
            displayInput: true
        })
    }

    handleChange(e: any) {
        this.setState({
            ...this.state,
            value: e.target.value
        })
    }
    render() {
        return <div ref="title"
            onClick={this.handleClicInSide.bind(this, 'title')}>
            {this.state.displayInput === false ?
                this.state.value :
                <Input type='text' placeholder={this.props.placeholder} value={this.state.value} onChange={this.handleChange}></Input>}
        </div>;
    }
}