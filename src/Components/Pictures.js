import React from "react";
import "./Pictures.css";

const Pictures = ({ openModal, dogPictures }) => {
  return (
    <div className="dogContainer">
      {dogPictures.map(dog => {
        return (
          <img
            className="dogPicture"
            alt="Picture of a dog"
            key={Math.random()}
            onClick={() => openModal(dog)}
            src={dog}
          />
        );
      })}
    </div>
  );
};

export default Pictures;
