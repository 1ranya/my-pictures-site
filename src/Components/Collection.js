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
            <section className="hero is-info is-fullheight whiteBG">
                <h1 className="title is-1 has-text-centered titleWoAmI">COLLECTION</h1>
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <div className="card">
                                <div className="card-image grey">
                                    <figure className=" image1 image is-4by3">
                                        <img src={japonaise} alt="Placeholder image"/>
                                    </figure>
                                </div>
                                <div className="card-content favoriteCard">
                                    <div className="columns">
                                        <div className="column is-one-third">
                                            <p className="title is-2">50 €</p>
                                        </div>
                                        <div className="column is-one-third">
                                            <a className="instagram white">Instagram: <i class="fab fa-instagram"></i> @RanyaTounsy</a>
                                        </div>
                                        <div className="column is-one-third">
                                            <nav className="level is-mobile">
                                                <div className="level-right">
                                                    <a className="level-item" aria-label="reply">
                                                        <span className="icon is-large">
                                                        <i className="fas fa-reply" aria-hidden="true"></i>
                                                        </span>
                                                    </a>
                                                    <a className="level-item" aria-label="retweet">
                                                        <span className="icon is-large">
                                                        <i className="fas fa-retweet" aria-hidden="true"></i>
                                                        </span>
                                                    </a>
                                                    <a className="level-item" aria-label="like">
                                                        <span className="icon is-large">
                                                        <i className="fas fa-heart" aria-hidden="true"></i>
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
