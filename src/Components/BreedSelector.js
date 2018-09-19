import React from "react";
import "./BreedSelector.css";

const dogBreeds = [
  {
    name: "All Doggos",
    url: "https://dog.ceo/api/breeds/image/random/20"
  },
  {
    name: "French Bulldog",
    url: "https://dog.ceo/api/breed/bulldog/french/images/random/20"
  },
  {
    name: "Pomeranian",
    url: "https://dog.ceo/api/breed/pomeranian/images/random/20"
  },
  {
    name: "Pug",
    url: "https://dog.ceo/api/breed/pug/images/random/20"
  },
  {
    name: "Shiba Inu",
    url: "https://dog.ceo/api/breed/shiba/images/random/20"
  },
  {
    name: "Corgi",
    url: "https://dog.ceo/api/breed/corgi/images/random/20"
  },
  {
    name: "Sheepdog",
    url: "https://dog.ceo/api/breed/sheepdog/images/random/20"
  },
  {
    name: "Husky",
    url: "https://dog.ceo/api/breed/husky/images/random/20"
  },
  {
    name: "Chow Chow",
    url: "https://dog.ceo/api/breed/chow/images/random/20"
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
