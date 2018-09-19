import React, { Component } from "react";
import "./App.css";

import UpArrow from "./up_arrow.png";

import BreedSelector from "./Components/BreedSelector";
import Pictures from "./Components/Pictures";
import Modal from "./Components/Modal";
import ModalImage from "./Components/ModalImage";

class App extends Component {
  constructor() {
    super();
    this.state = {
      breed: "https://dog.ceo/api/breeds/image/random/30",
      dogPictures: [],
      modalOpen: false,
      modalImage: ""
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
    console.log(window.screenY);
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

  openModal = image => {
    this.setState(
      prevState => {
        return {
          modalOpen: !prevState.modalOpen,
          modalImage: image
        };
      },
      () => console.log(this.state.modalUrl)
    );
  };

  scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <div className="App">
        <img
          src={UpArrow}
          className="scrollToTop"
          onClick={this.scrollToTop}
          alt="Scroll to top."
        />
        {this.state.modalOpen && (
          <Modal>
            <ModalImage
              openModal={this.openModal}
              modalImage={this.state.modalImage}
            />
          </Modal>
        )}
        <header className="App-header">
          <span className="App-logo">🐶</span>
          <h1 className="App-title">Pictures of Dogs</h1>
        </header>
        <BreedSelector setDogBreed={this.setDogBreed} />
        <Pictures
          openModal={this.openModal}
          dogPictures={this.state.dogPictures}
        />
      </div>
    );
  }
}

export default App;
