import React, { Component } from 'react'
import japonaise from '../assets/picturesCollection/japonaise.jpg'
import paletteColor from '../assets/paletteColor.jpg'

class CollectionDisplay extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <section class="hero is-info is-fullheight whiteBG">
                <div class="hero-body">
                    <div class="container imageContainer has-text-centered">
                        <div className="columns">
                            <div className="column columnImagePortrait container">
                                <img class=" imagePortrait image  opacityPortrait" src={japonaise} alt="Placeholder image"/>
                                <div class="overlay">My Name is John</div>
                            </div>
                            <div className="column columnImagePortrait container">
                                <img class=" imagePortrait image  opacityPortrait" src={paletteColor} alt="Placeholder image"/>
                                <div class="overlay">My Name is John</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default CollectionDisplay
