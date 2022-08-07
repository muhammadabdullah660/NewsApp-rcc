import React, { Component } from "react";
import Navbar from "./Components/Navbar/Navbar";
import News from "./Components/News/News";

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <News pageSize={6} country="in" category="sports" />
      </>
    );
  }
}
