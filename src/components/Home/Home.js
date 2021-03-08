import React, { Component } from "react";
import FormBuilder from "../Form/FormBuilder";
import FormGenerator from "../Form/FormGenerator";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <FormGenerator/>
        <FormBuilder/>
      </div>
    );
  }
}

export default Home;
