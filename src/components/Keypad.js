// Code Keypad Component Here
import React, { Component } from 'react'

class Keypad extends Component {
    render() {
        return(
            <div>
                <input onKeyUp={() =>console.log("Entering password...")} type="password"></input>
            </div>
        )
    }
}

export default Keypad
