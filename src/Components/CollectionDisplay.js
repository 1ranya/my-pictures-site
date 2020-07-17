import React, { Component } from 'react'
import japonaise from '../assets/picturesCollection/japonaise.jpg'
import paletteColor from '../assets/paletteColor.jpg'
import firebase from '../firebase/firebase'
var storage = firebase.storage();
class CollectionDisplay extends Component {
    constructor(props) {
        super(props)

        this.state = {
            url:'', 
            price:[], 
            red:""
        }
    }

    componentDidMount(){
        let images = [{name:'africa.jpg', price: '25€', },
                      {name:'monro.jpg', price:'19€'},
                      {name:'regard.jpg', price:'22€'}, 
                      {name:'tiger.jpg', price:'30€'},
                      {name:'japonaise.jpg', price:'20€'}]
        let urls = [];
        let price= []
        images.map(image=>{
            storage
            .ref()
            .child(`images/${image.name}`)
            .getDownloadURL().then(url => {
                urls.push(url)
            }).then(()=>{
                price.push(image.price)
                this.setState({url:urls, price})
            })
        })
    } 

    render() {
      const {url, price} = this.state
      console.log("url", url)
      let portraits=[]; let partie2=[]; let partie3=[]
      for (let i in url){
        if(i<3)
          portraits.push(
          <div className="columns container has-text-centered">
            <div className=" column is-three-quarters columnImagePortrait container">
              <img className=" imagePortrait image1  opacityPortrait" src={url[i]} alt="Placeholder image"/>
              <div className="card-content favoriteCard">
                <div className="columns">
                  <div className="column">
                    <p className="title is-4">{ price[i] }</p>
                  </div>
                  <div className="column is-one-third">
                    <span className="icon ">
                      <i className="fas fa-retweet" aria-hidden="true"></i>
                    </span>
                  </div>
                  <div className="column is-one-third">
                    <span className="icon">
                      <i className="fas fa-heart" aria-hidden="true"></i>
                    </span>                
                  </div> 
                </div>
              </div>
            </div>
          </div> 
      )
      if(i>=3)
          partie2.push(
            <div className="columns container has-text-centered">
            <div className=" column is-three-quarters columnImagePortrait container">
              <img className=" imagePortrait image1  opacityPortrait" src={url[i]} alt="Placeholder image"/>
              <div className="card-content favoriteCard">
                <div className="columns">
                  <div className="column">
                    <p className="title is-4">{ price[i] }</p>
                  </div>
                  <div className="column is-one-third">
                    <span className="icon ">
                      <i className="fas fa-retweet" aria-hidden="true"></i>
                    </span>
                  </div>
                  <div className="column is-one-third">
                    <a className="icon" onClick={()=>{this.setState({red:"red"}); console.log("red")}}>
                      <i className="fas fa-heart" aria-hidden="true"></i>
                    </a>                
                  </div> 
                </div>
              </div>
            </div>
          </div>
       )
      }
        return (
            <section className="hero is-info is-fullheight whiteBG BG">
                <h1 className="title is-1 has-text-centered titleWoAmI">COLLECTION</h1>
                <div className="hero-body">
                  {portraits}
                </div>
                <div className="hero-body">
                  {partie2}
                </div>
                <div className="hero-body">
                  {portraits}
                </div>
                <div className="hero-body">
                  {portraits}
                </div>
                <div className="hero-body">
                  {portraits}
                </div>
            </section>
        )
    }
}

export default CollectionDisplay
