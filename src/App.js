import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    let pageSize = 18;
    let country = "in";
    return (
      <>
        <Router>
          <Navbar />
          <Routes>
            {/* we need to pass a key to reload component after changing category(updated prop) */}
            <Route
              exact
              path="/"
              element={
                <News
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
