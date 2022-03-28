import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_TURTLE_API;
  state = { progress: 0 };

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    let pageSize = 18;
    let country = "in";
    return (
      <>
        <Router>
          <Navbar />
          <LoadingBar height={3} color="red" progress={this.state.progress} />
          <Routes>
            {/* we need to pass a key to reload component after changing category(updated prop) */}
            <Route
              exact
              path="/"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="general"
                  pageSize={pageSize}
                  country={country}
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/about"
              element={
                <h2 className="text-center">
                  This site is made by Saras Verma for learning purpose only.
                  <p>Have fun !!!😊</p>
                </h2>
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="business"
                  pageSize={pageSize}
                  country={country}
                  category="business"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="entertainment"
                  pageSize={pageSize}
                  country={country}
                  category="entertainment"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="health"
                  pageSize={pageSize}
                  country={country}
                  category="health"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="science"
                  pageSize={pageSize}
                  country={country}
                  category="science"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="sports"
                  pageSize={pageSize}
                  country={country}
                  category="sports"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="technology"
                  pageSize={pageSize}
                  country={country}
                  category="technology"
                />
              }
            />
          </Routes>
        </Router>
      </>
    );
  }
}
