import React, { Component } from 'react'

class Instructors extends Component {
    render() {
        const inst = ["ahmed", "maha", "sami", "salman"]
        return (
            <React.Fragment>
                {inst.map(e=> (<li>{e}</li>))}
            </React.Fragment>
        )
    }
}

export default Instructors
