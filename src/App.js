import React from 'react';
import './App.css';
import WhoAmI from './Components/WhoAmI';
import Collection from './Components/Collection';
import ContactMe from './Components/ContactMe';
import blash from './assets/brashes.jpg'
import CollectionDisplay from './Components/CollectionDisplay'
function App() {
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
  );
}

export default App;
