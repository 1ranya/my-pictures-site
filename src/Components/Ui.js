import React, { Component } from 'react'
import PropTypes from 'prop-types'
import WhoAmI from './WhoAmI';
import ContactMe from './ContactMe';
import blash from '../assets/brashes.jpg'
import CollectionDisplay from './CollectionDisplay'
export default class Ui extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        console.log("props ", this.props)
        return (
            <div className="container appHolder">
                <section id="home">
                    <div className="hero is-info is-fullheight" 
                        style={{backgroundImage: `url(${blash})`, 
                        backgroundSize:'cover'}}>
                        <div className="hero-body">
                        <div className="container has-text-centered">
                            <ul>
                            <li className="button is-text navBarModifications "><a className="white" href="#whoami">Who am i</a></li>
                            <li className="button is-text navBarModifications"><a className="white" href="#collection">Collection</a></li>
                            <li className="button is-text navBarModifications"><a className="white" href="#contact">Contact me</a> </li>      
                            </ul>
                        </div>
                        </div>   
                    </div>
                </section>
                <br/>
                <br/>
                <section id="whoami">
                <WhoAmI/>
                </section>
                <br/>
                <section id="collection">
                <CollectionDisplay/>
                </section>
                <br/>
                <section id="contact">
                <ContactMe/>
                </section>
            </div>
        )
    }
}
