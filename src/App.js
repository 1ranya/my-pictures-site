import React from 'react';
import './App.css';
import WhoAmI from './Components/WhoAmI';
import Collection from './Components/Collection';
import ContactMe from './Components/ContactMe';
import blash from './assets/brashes.jpg'
function App() {
  return (
    <div class="container appHolder">
      <section id="home">
        <div class="hero is-info is-fullheight" 
            style={{backgroundImage: `url(${blash})`, 
            backgroundSize:'cover'}}>
          <div class="hero-body">
            <div class="container has-text-centered">
              <ul>
                <li class="button is-text navBarModifications "><a className="white" href="#whoami">Who am i</a></li>
                <li class="button is-text navBarModifications"><a className="white" href="#collection">Collection</a></li>
                <li class="button is-text navBarModifications"><a className="white" href="#contact">Contact me</a> </li>      
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
        <Collection/>
      </section>
      <section id="contact">
        <ContactMe/>
      </section>
    </div>
  );
}

export default App;
