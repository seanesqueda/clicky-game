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
    images: images,
    topScore: 0,
    pickedImages: [],
    alert: ""
  };

  //Boilerplate for shuffing an array
  shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i)
      const temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
    return array;
  };

  //Shuffle cards using shuffle array code and change character state
  shuffleImages = () => {
    this.setState({images: this.shuffleArray(this.state.images)})
  };

  //Pick an image and check if it has been picked before
  handlePickedImage = (event) => {
    const name = event.target.name;
    let pickedImages = this.state.pickedImages
    if (pickedImages.includes(name)) {
      pickedImages = []
      alert("This has been picked")
    }
    else {
      pickedImages.push(name);
      alert("Keep going!")
    }
    this.setState({pickedImages: pickedImages})
    this.shuffleImages();
  }

  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <div className="container">
          {this.state.images.map(image => (
            <Card
              id={image.id}
              key={image.id}
              name={image.name}
              image={image.image}
              onClick={this.handlePickedImage}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
