import React, { Component } from 'react';
import { Input } from 'antd';

export default class CreateCard extends Component<{ createCard: any }, { value: string }> {
    wrapperRef: any;
    constructor(props: any) {
        super(props);
        this.state = {
            value: ''
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
            this.props.createCard(this.state.value);
        }
    }
    handleClickOutside(event: any) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.props.createCard(this.state.value);
        }
    }

    handleClicInSide(refName: any, event: any) {
        this.wrapperRef = this.refs[refName];
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
            <Input placeholder={'Nom de votre card'} type='text' value={this.state.value} onChange={this.handleChange}></Input>
        </div>;
    }
}
