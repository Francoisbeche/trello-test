import React, { Component } from 'react';
import { Icon } from 'antd';
import styled from 'styled-components';

/**
 * Component that alerts if you click outside of it
 */
export default class CardTitle extends Component<{ card: any, updateName: any }, { displayInput: boolean, value: string }> {
    wrapperRef: any;
    constructor(props: any) {
        super(props);
        this.state = {
            displayInput: false,
            value: this.props.card.name
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
            this.props.updateName(this.state.value)
            this.setState({
                displayInput: false
            })
        }
    }
    handleClickOutside(event: any) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.props.updateName(this.state.value)
            this.setState({
                displayInput: false
            })
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
            <NameIcon type="robot" />
            {this.state.displayInput === false ?
                this.state.value :
                <input type='text' value={this.state.value} onChange={this.handleChange}></input>}
        </div>;
    }
}

const NameIcon = styled(Icon)`
margin-right: 10px;
`;
