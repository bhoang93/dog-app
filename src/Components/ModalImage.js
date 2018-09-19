import React from "react";
import "./ModalImage.css";

const ModalImage = ({ openModal, modalImage }) => {
  return (
    <div className="modalContainer">
      <div>
        <p onClick={openModal}>&times;</p>
        <img src={modalImage} />
      </div>
    </div>
  );
};

export default ModalImage;
