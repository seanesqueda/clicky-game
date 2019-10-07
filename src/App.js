import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import images from "./images.json"


class App extends Component {
  // Setting this.state.images to the images json array
  state = {
    images
  };
  render() {
    return (
      <div>
        <Navbar />
        <Header />
      </div>
    );
  }
}

export default App;
