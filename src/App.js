import React, { Component } from "react";
import "./App.css";

import UpArrow from "./up_arrow.png";

import BreedSelector from "./Components/BreedSelector";
import Pictures from "./Components/Pictures";
import Modal from "./Components/Modal";
import ModalImage from "./Components/ModalImage";

import InfiniteScroll from "react-infinite-scroll-component";

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
    this.scrollToTop();
    fetch(this.state.breed)
      .then(data => data.json())
      .then(pictures =>
        this.setState(prevState => {
          return { dogPictures: pictures.message };
        })
      );
  };

  fetchInfinite = () => {
    fetch(this.state.breed)
      .then(data => data.json())
      .then(pictures =>
        this.setState(prevState => {
          return {
            dogPictures: prevState.dogPictures.concat(pictures.message)
          };
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

        <InfiniteScroll
          dataLength={this.state.dogPictures.length}
          next={this.fetchInfinite}
          hasMore={true}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>"You've seen all the dogs."</b>
            </p>
          }
        >
          <Pictures
            openModal={this.openModal}
            dogPictures={this.state.dogPictures}
          />
        </InfiniteScroll>
      </div>
    );
  }
}

export default App;
