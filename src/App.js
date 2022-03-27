import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

export default class App extends Component {
  render() {
    const pageSize = 18;
    const country = "in";
    const category = "general";
    return (
      <>
        <Navbar />
        <div className="container">
          <News
            pageSize={this.pageSize}
            country={this.country}
            category={this.category}
          />
        </div>
      </>
    );
  }
}
