import React, { Component } from "react";
import firebase from "../firebase/firebase";
import authenticate from "../Actions/index";
import { connect } from "react-redux";

var storage = firebase.storage();
class CollectionDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: "",
      price: [],
      color: "blue",
      clicked: [],
      authenticate: false,
    };
    this.colorChange = this.colorChange.bind(this);
  }

  componentDidMount() {
    let images = [
      { name: "africa.jpg", price: "25€" },
      { name: "monro.jpg", price: "19€" },
      { name: "regard.jpg", price: "22€" },
      { name: "tiger.jpg", price: "30€" },
      { name: "japonaise.jpg", price: "20€" },
    ];
    let urls = [];
    let price = [];
    images.map((image) => {
      storage
        .ref()
        .child(`images/${image.name}`)
        .getDownloadURL()
        .then((url) => {
          urls.push(url);
        })
        .then(() => {
          price.push(image.price);
          this.setState({ url: urls, price });
        });
    });

    console.log("images ", images);
  }

  colorChange(imageId) {
    // const {color, url, clicked} = this.state
    // let colorCp = ""
    // let changedColor = color == "red" ? colorCp ="blue" : colorCp="red"
    // let clickedCp = clicked
    // clickedCp.push(imageId)
    // return (clickedCp, imageId)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("color", this.state.color);
    let result = this.colorChange(2);
    console.log("result", result);
  }

  render() {
    const { url, price, color, clicked } = this.state;
    let portraits = [];
    console.log("authenticate display", this.props.authenticate);

    for (let i = 0; i < url.length; i++) {
      portraits.push(
        <div className=" columnImagePortrait container">
          <img
            className="image1  opacityPortrait"
            src={url[i]}
            alt="Placeholder image"
          />
          <div className="card-content favoriteCard">
            <div className="columns bottomTab">
              <div className="column">
                <p className="title is-4">{price[i]}</p>
              </div>

              <div className="column is-one-third">
                <span className="icon ">
                  <i className="fas fa-retweet" aria-hidden="true"></i>
                </span>
              </div>

              <div className="column is-one-third">
                <a
                  className={clicked == i ? "icon " + color : "blue"}
                  onClick={this.colorChange(i)}
                >
                  <i className="fas fa-heart" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return (
      <section className="hero is-info is-fullheight whiteBG BG">
        <h1 className="title is-1 has-text-centered titleWoAmI">COLLECTION</h1>
        <div className="hero-body">
          <div className="content">{portraits}</div>
        </div>
      </section>
    );
  }
}
const mapStateToProps = (state) => ({
  authenticate: state.authenticate,
});

const mapDispatchToProps = (dispatch) => {
  return {
    colorChange: () => dispatch({ type: "AUTHENTICATE" }),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
  authenticate
)(CollectionDisplay);
