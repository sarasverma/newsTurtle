import React, { Component } from "react";
import loading from "./loading.gif";

export class Spinner extends Component {
  render() {
    return (
      <div className="container text-center">
        <img src={loading} alt="loading..." style={{ margin: "1.5rem 0" }} />
      </div>
    );
  }
}

export default Spinner;
