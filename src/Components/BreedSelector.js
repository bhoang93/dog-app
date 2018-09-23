import React from "react";
import "./BreedSelector.css";
import BreedList from "./BreedList";

import Autocomplete from "react-autocomplete";
import { Scrollbars } from "react-custom-scrollbars";

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
  },
  {
    name: "Boxer",
    url: "https://dog.ceo/api/breed/boxer/images/random/30"
  },
  {
    name: "Malamute",
    url: "https://dog.ceo/api/breed/malamute/images/random/30"
  },
  {
    name: "Akita",
    url: "https://dog.ceo/api/breed/akita/images/random/30"
  },
  {
    name: "Whippet",
    url: "https://dog.ceo/api/breed/whippet/images/random/30"
  },
  {
    name: "Dalmatian",
    url: "https://dog.ceo/api/breed/dalmatian/images/random/30"
  },
  {
    name: "Chihuahua",
    url: "https://dog.ceo/api/breed/chihuahua/images/random/30"
  },
  {
    name: "Beagle",
    url: "https://dog.ceo/api/breed/beagle/images/random/30"
  },
  {
    name: "Basenji",
    url: "https://dog.ceo/api/breed/basenji/images/random/30"
  },
  {
    name: "Otterhound",
    url: "https://dog.ceo/api/breed/otterhound/images/random/30"
  }
];

const BreedSelector = ({ setDogBreed }) => {
  return (
    <div className="breedContainer">
      <BreedList setDogBreed={setDogBreed} dogBreeds={dogBreeds} />
      <div className="breedButtonDiv">
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
    </div>
  );
};

export default BreedSelector;
