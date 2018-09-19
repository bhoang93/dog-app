import React from "react";
import "./Pictures.css";

const Pictures = ({ dogPictures }) => {
  return (
    <div className="dogContainer">
      {dogPictures.map(dog => {
        return (
          <img
            className="dogPicture"
            alt="Picture of a dog"
            key={dogPictures.indexOf(dog)}
            src={dog}
          />
        );
      })}
    </div>
  );
};

export default Pictures;
