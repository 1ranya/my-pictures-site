import React, { Component } from "react";
import "./App.css";
import Ui from "./Components/Ui";
import SignUp from "./Components/SignUp";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const authenticate = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  return (
    <div className="container appHolder">
      {authenticate ? <SignUp /> : <Ui />}
    </div>
  );
}

export default App;
