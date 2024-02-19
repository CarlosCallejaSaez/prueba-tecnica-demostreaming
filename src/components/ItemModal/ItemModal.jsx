import React from 'react';
import Modal from '../Modal/Modal'; 
import defaultImage from '../../../assets/Image-not-found.png'; 

const ItemModal = ({ show, onClose, selectedItem }) => {
  const addDefaultSrc = (ev) => {
    ev.target.src = defaultImage;
  };

  return (
    <Modal show={show} onClose={onClose}>
      {selectedItem && (
        <div>
          <h2>{selectedItem.title}</h2>
          <p>{selectedItem.description}</p>
          <p>Release Year: {selectedItem.releaseYear}</p>
          <img onError={addDefaultSrc} src={selectedItem.images['Poster Art'].url} alt={selectedItem.title} style={{width:"200px"}} />
        </div>
      )}
    </Modal>
  );
};

export default ItemModal;
