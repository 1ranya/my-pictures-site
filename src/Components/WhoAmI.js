import React, { Component } from 'react'
import painter from '../assets/painter.jpg'
import programmer from '../assets/programmer.jpg'

class WhoAmI extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div class="hero is-info is-fullheight whiteBG">
                <h1 class="title is-1 has-text-centered titleWoAmI">WHO AM I ?</h1>
                <div class="hero-body columns">
                    <div class="column hero is-info is-fullheight painterBG" >
                        <div class="hero-body painterText">
                            <div class="container has-text-centered">
                                <p id="paintingLover" class="title">
                                    Painting Lover 
                                </p>
                                <p id="paintingSub" class="subtitle">
                                    The reason why i made this website, to share my work with you
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="column hero is-info is-fullheight programerBG">
                        <div class="hero-body painterText">
                            <div class="container has-text-centered ">
                                <p id="programer" class="title black bold">
                                    Programming Student
                                </p>
                                <p id="programerSub" class="subtitle">
                                    Thanks to Programming i made this website 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default WhoAmI
