
import React from 'react';

const ModalContent = ({ selectedItem, onClose }) => {
  const addDefaultSrc = (ev) => {
    ev.target.src = defaultImage;
  };

  return (
    <div>
      <h2>{selectedItem.title}</h2>
      <p>{selectedItem.description}</p>
      <p>Release Year: {selectedItem.releaseYear}</p>
      <img onError={addDefaultSrc} src={selectedItem.images['Poster Art'].url} alt={selectedItem.title} style={{ width: "200px" }} />
    </div>
  );
};

export default ModalContent;
