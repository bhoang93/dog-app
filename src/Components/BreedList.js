import React from "react";
import Modal from "./Modal.js";
import "./BreedList.css";

import { Scrollbars } from "react-custom-scrollbars";

class BreedList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    };
  }

  toggleBreedList = () => {
    this.setState(prevState => {
      return {
        isModalOpen: !prevState.isModalOpen
      };
    });
  };

  chooseBreed = url => {
    this.toggleBreedList();
    this.props.setDogBreed(url);
  };

  render() {
    return (
      <div>
        <button className="listButton" onClick={this.toggleBreedList}>
          Full List
        </button>
        {this.state.isModalOpen && (
          <Modal>
            <div className="breedListContainer">
              <ul className="breedList">
                <button className="closeButton" onClick={this.toggleBreedList}>
                  Close
                </button>
                <Scrollbars style={{ width: 500, height: "90%" }}>
                  {this.props.dogBreeds.map(breed => {
                    return (
                      <li
                        className="breedLi"
                        onClick={() => {
                          this.chooseBreed(breed.url);
                        }}
                      >
                        {breed.name}
                      </li>
                    );
                  })}
                </Scrollbars>
              </ul>
            </div>
          </Modal>
        )}
      </div>
    );
  }
}

export default BreedList;
