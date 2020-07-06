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
            <div className="hero is-info is-fullheight whiteBG">
                <h1 className="title is-1 has-text-centered titleWoAmI">WHO AM I ?</h1>
                <div className="hero-body columns">
                    <div className="column hero is-info is-fullheight painterBG" >
                        <div className="hero-body painterText">
                            <div className="container has-text-centered">
                                <p id="paintingLover" className="title">
                                    Painting Lover 
                                </p>
                                <p id="paintingSub" className="subtitle">
                                    The reason why i made this website, to share my work with you
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="column hero is-info is-fullheight programerBG">
                        <div className="hero-body painterText">
                            <div className="container has-text-centered ">
                                <p id="programer" className="title black bold">
                                    Programming Student
                                </p>
                                <p id="programerSub" className="subtitle">
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
