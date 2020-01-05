import React, { Component } from 'react'

class Helloani extends Component {
    constructor(props){
        super(props)
        this.state = {
            moodcounter: 0
        }
    }
    handleClick(e) {
        this.state.moodcounter < 10 ? 
        this.setState({moodcounter: this.state.moodcounter + 1}) :
        this.setState({moodcounter: 1})
    }
    render() {
        return (
            <div>
                <h1>Hello {this.props.name}</h1>
                <p>You are {this.props.age} years old</p>
                <p>i like all these animals: 
                 {this.props.animals.map(e => (<li>{e}</li>))}
                </p>
                <p>The initial mood is {this.state.moodcounter}</p>
                <button onClick={(e) => this.handleClick(e)}> IMPROVE MY MOOD</button>
            </div>
        )
    }
}

export default Helloani
