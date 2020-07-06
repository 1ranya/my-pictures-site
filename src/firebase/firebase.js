import firebase from "firebase/app";
import "firebase/storage";

var config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
  apiKey: "AIzaSyDMeex2y8UXH-DyEtiYBY_nwn7e0HWtjWA",
  authDomain: "my-pictures-site.firebaseapp.com",
  databaseURL: "https://my-pictures-site.firebaseio.com",
  projectId: "my-pictures-site",
  storageBucket: "my-pictures-site.appspot.com",
  messagingSenderId: "140151709343",
  appId: "1:140151709343:web:618943d8a2210b2bb60caa",
  measurementId: "G-0QEV55R1HC"
};

var fire = firebase.initializeApp(config);
export default fire;