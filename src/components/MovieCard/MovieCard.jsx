import React, { useState } from 'react';
import Modal from './Modal';
import styles from './MovieCard.module.css';

const MovieCard = ({ item }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <>
      <div className={styles.card} onClick={openModal}>
        <img className={styles.image} src={item.images['Poster Art'].url} alt={item.title} />
        <div className={styles.info}>
          <h2>{item.title}</h2>
          <p>{item.releaseYear}</p>
        </div>
      </div>

      <Modal show={showModal} onClose={closeModal}>
        <h1>{item.title}</h1>
        <p>{item.description}</p>
        <img src={item.images['Poster Art'].url} alt={item.title} />
        <p>Year: {item.releaseYear}</p>
      </Modal>
    </>
  );
};

export default MovieCard;
