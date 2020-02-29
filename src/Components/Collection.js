import React, { Component } from 'react'
import portraitGifLogo from '../assets/brashes.jpg'

class Collection extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <section class="hero is-info is-fullheight section2" 
                    style={{backgroundImage: `url(${portraitGifLogo})`, 
                    backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
                <div class="hero-body">
                    <div class="hero-body">
                        <div class="container has-text-centered">
                                <button class="button is-text navBarModifications">Who am i</button>
                                <button class="button is-text navBarModifications">Collection</button>
                                <button class="button is-text navBarModifications">Contact me </button>                           
                        </div>
                    </div>
                </div>   
            </section>
        )
    }
}

export default Collection
