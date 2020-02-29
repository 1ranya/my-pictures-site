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
                                <div class="card-image">
                                    <figure class="image1 image is-4by3">
                                        <img src={japonaise} alt="Placeholder image"/>
                                    </figure>
                                </div>
                                <div class="card-content">
                                    <div class="media">
                                        <div class="media-left">
                                            <figure class="image is-48x48">
                                            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"/>
                                            </figure>
                                        </div>
                                        <div class="media-content">
                                            <p class="title is-4">John Smith</p>
                                            <p class="subtitle is-6">@johnsmith</p>
                                        </div>
                                    </div>
                                    <div class="content">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                                        <a href="#">#css</a> <a href="#">#responsive</a>
                                        <br/>
                                        <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                                        <nav class="level is-mobile">
                                            <div class="level-left">
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
            </section>
        )
    }
}

export default Collection
