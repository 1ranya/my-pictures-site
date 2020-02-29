import React, { Component } from 'react'

class NavBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }
    render() {
        return (
            <div class="container has-text-centered">
                <button class="button is-text navBarModifications">Who am i</button>
                <button class="button is-text navBarModifications">Collection</button>
                <button class="button is-text navBarModifications">Contact me </button>                           
            </div>
        )
    }
}

export default NavBar
