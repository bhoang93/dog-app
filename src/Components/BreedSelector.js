import React from "react";
import "./BreedSelector.css";
import Autocomplete from "react-autocomplete";

const dogBreeds = [
  {
    name: "All Breeds",
    url: "https://dog.ceo/api/breeds/image/random/30"
  },
  {
    name: "French Bulldog",
    url: "https://dog.ceo/api/breed/bulldog/french/images/random/30"
  },
  {
    name: "Pomeranian",
    url: "https://dog.ceo/api/breed/pomeranian/images/random/30"
  },
  {
    name: "Samoyed",
    url: "https://dog.ceo/api/breed/samoyed/images/random/30"
  },
  {
    name: "Pug",
    url: "https://dog.ceo/api/breed/pug/images/random/30"
  },
  {
    name: "Shiba Inu",
    url: "https://dog.ceo/api/breed/shiba/images/random/30"
  },
  {
    name: "Corgi",
    url: "https://dog.ceo/api/breed/corgi/images/random/30"
  },
  {
    name: "Sheepdog",
    url: "https://dog.ceo/api/breed/sheepdog/images/random/30"
  },
  {
    name: "Husky",
    url: "https://dog.ceo/api/breed/husky/images/random/30"
  },
  {
    name: "Chow Chow",
    url: "https://dog.ceo/api/breed/chow/images/random/30"
  }
];

const BreedSelector = ({ setDogBreed }) => {
  return (
    <div className="breedContainer">
      {dogBreeds.map(breed => {
        return (
          <button
            className="breedButton"
            key={dogBreeds.indexOf(breed)}
            onClick={() => setDogBreed(breed.url)}
          >
            {breed.name}
          </button>
        );
      })}
    </div>
  );
};

export default BreedSelector;
