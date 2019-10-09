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
    currentScore: 0,
    topScore: 0,
    pickedImages: [],
    message: "Pick an image to begin!"
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
    const name = event.target.alt;
    let pickedImages = this.state.pickedImages;
    let currentScore = this.state.currentScore;
    let topScore = this.state.topScore;
    let message = this.state.message;
    if (pickedImages.includes(name)) {
      pickedImages = [];
      currentScore = 0;
      message = "You guess wrong. Try again!";
    }
    else {
      pickedImages.push(name);
      currentScore++;
      message = "You guessed correctly. Keep going!";
      if (currentScore > topScore) {
        topScore = currentScore
      };
      if (currentScore === 12) {
        message = "CONGRATS YOU WIN!!!"
        pickedImages = [];
        currentScore = 0;
      }
    };
    console.log(name)
    this.setState({pickedImages: pickedImages});
    this.setState({currentScore: currentScore});
    this.setState({topScore: topScore})
    this.setState({message: message});
    this.shuffleImages();
  }

  render() {
    return (
      <div>
        <Navbar 
        currentScore={this.state.currentScore}
        topScore={this.state.topScore}
        message={this.state.message}
        />
        <Header />
        <div className="container">
          {this.state.images.map(image => (
            <Card
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
