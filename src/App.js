import React, { Component } from "react";
import logo from "./dogLogo.svg.png";
import "./App.css";

import BreedSelector from "./Components/BreedSelector";
import Pictures from "./Components/Pictures";

class App extends Component {
  constructor() {
    super();
    this.state = {
      breed: "https://dog.ceo/api/breeds/image/random/20",
      dogPictures: []
    };
  }

  fetchDogs = () => {
    fetch(this.state.breed)
      .then(data => data.json())
      .then(pictures =>
        this.setState(prevState => {
          return { dogPictures: pictures.message };
        })
      );
  };

  componentDidMount() {
    this.fetchDogs();
  }

  setDogBreed = breed => {
    this.setState(
      prevState => {
        return { breed: breed };
      },
      () => {
        this.fetchDogs();
      }
    );
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Pictures of Dogs</h1>
        </header>
        <BreedSelector setDogBreed={this.setDogBreed} />
        <Pictures dogPictures={this.state.dogPictures} />
      </div>
    );
  }
}

export default App;
