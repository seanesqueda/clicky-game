import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import images from "./images.json";
import "./App.css";


class App extends Component {


  // Setting this.state.images to the images json array
  state = {
    images,
  };

  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <div className="container">
          {this.state.images.map(friend => (
            <Card
              id={friend.id}
              key={friend.id}
              name={friend.name}
              image={friend.image}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
