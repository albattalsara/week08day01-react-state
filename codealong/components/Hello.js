import React, { Component } from 'react'

class Hello extends Component {
    constructor(props){
        super(props)
        this.state = {
            counter: 0
        }
    }
    handleClick(e) {
        this.setState({counter: this.state.counter + 1})
    }
    render() {
        return (
            <div>
                <h1>Hello {this.props.name}</h1>
                <p>You are {this.props.age} years old</p>
                <p>The initial count is {this.state.counter}</p>
                <button onClick={(e) => this.handleClick(e)}> Add to counter</button>
            </div>
        )
    }
}

export default Hello
