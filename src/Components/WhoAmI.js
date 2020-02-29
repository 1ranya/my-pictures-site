import React, { Component } from 'react'
import portraitGifLogo from '../assets/brashes.jpg'
import NavBar from './NavBar'
class WhoAmI extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <section class="hero is-info is-fullheight section1" 
                    style={{backgroundImage: `url(${portraitGifLogo})`, 
                   backgroundSize:'cover'}}>
                <div class="hero-body">
                    <NavBar/>
                </div>   
            </section>
        )
    }
}

export default WhoAmI
