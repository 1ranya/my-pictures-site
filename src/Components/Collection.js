import React, { Component } from 'react'
import japonaise from '../assets/picturesCollection/japonaise.jpg'

class Collection extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <section class="hero is-info is-fullheight whiteBG">
                <h1 class="title is-1 has-text-centered titleWoAmI">COLLECTION</h1>
                    <div class="hero-body">
                        <div class="container has-text-centered">
                            <div class="card">
                                <div class="card-image grey">
                                    <figure class=" image1 image is-4by3">
                                        <img src={japonaise} alt="Placeholder image"/>
                                    </figure>
                                </div>
                                <div class="card-content favoriteCard">
                                    <div class="columns">
                                        <div class="column is-one-third">
                                            <p class="title is-2">50 €</p>
                                        </div>
                                        <div class="column is-one-third">
                                            <a className="instagram white">Instagram: <i class="fab fa-instagram"></i> @RanyaTounsy</a>
                                        </div>
                                        <div className="column is-one-third">
                                            <nav class="level is-mobile">
                                                <div class="level-right">
                                                    <a class="level-item" aria-label="reply">
                                                        <span class="icon is-large">
                                                        <i class="fas fa-reply" aria-hidden="true"></i>
                                                        </span>
                                                    </a>
                                                    <a class="level-item" aria-label="retweet">
                                                        <span class="icon is-large">
                                                        <i class="fas fa-retweet" aria-hidden="true"></i>
                                                        </span>
                                                    </a>
                                                    <a class="level-item" aria-label="like">
                                                        <span class="icon is-large">
                                                        <i class="fas fa-heart" aria-hidden="true"></i>
                                                        </span>
                                                    </a>
                                                </div>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>           
                        </div>
                    </div>
            </section>
        )
    }
}

export default Collection
