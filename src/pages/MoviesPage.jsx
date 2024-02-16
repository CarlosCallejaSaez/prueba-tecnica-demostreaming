import React, { useContext, useState } from 'react';
import { AppContext } from '../AppContext';
import Modal from '../components/Modal/Modal';
import styles from './MoviesPage.module.css'; 
import defaultImage from '../../assets/Image-not-found.png'

const MoviesPage = () => {
  const { state, dispatch } = useContext(AppContext);
  const [year, setYear] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const addDefaultSrc = (ev) => {
    ev.target.src = defaultImage;
  };

  const openModal = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
    dispatch({ type: 'SET_FILTER_YEAR', payload: parseInt(event.target.value, 10) || 0 });
  };

  const handlePageSizeChange = (event) => {
    dispatch({ type: 'SET_PAGE_SIZE', payload: parseInt(event.target.value, 10) });
    dispatch({ type: 'SET_CURRENT_PAGE', payload: 1 });
  };

  const goToPage = (pageNumber) => {
    dispatch({ type: 'SET_CURRENT_PAGE', payload: pageNumber });
  };

  const filteredMovies = state.movies.filter(
    (item) => state.filterYear === 0 || item.releaseYear === state.filterYear
  );

  const totalPages = Math.ceil(filteredMovies.length / state.pageSize);

  const paginatedMovies = filteredMovies.slice(
    (state.currentPage - 1) * state.pageSize,
    state.currentPage * state.pageSize
  );

  return (
    <>
    <div className={styles.filterPagination}>
        <select value={state.pageSize} onChange={handlePageSizeChange} className={styles.pageSizeSelect}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
        <input
          type="number"
          value={year}
          onChange={handleYearChange}
          placeholder="Filter by year"
          className={styles.yearInput}
        />
        <button
          disabled={state.currentPage === 1}
          onClick={() => goToPage(state.currentPage - 1)}
          className={styles.paginationButton}
        >
          Previous
        </button>
        <button
          disabled={state.currentPage === totalPages}
          onClick={() => goToPage(state.currentPage + 1)}
          className={styles.paginationButton}
        >
          Next
        </button>
      </div>
    <div className={styles.container}>
      {paginatedMovies.map((item, index) => (
        <div key={index} className={styles.card} onClick={() => openModal(item)}>
          <img onError={addDefaultSrc}  src={item.images['Poster Art'].url} alt={item.title} className={styles.cardImage} />
          <h3 className={styles.cardTitle}>{item.title}</h3>
        </div>
      ))}
      <Modal show={selectedItem !== null} onClose={closeModal}>
        {selectedItem && (
          <div>
            <h2>{selectedItem.title}</h2>
            <p>{selectedItem.description}</p>
            <p>Release Year: {selectedItem.releaseYear}</p>
            <img style={{width:"200px"}}onError={addDefaultSrc} src={selectedItem.images['Poster Art'].url} alt={selectedItem.title} className={styles.modalImage} />
            <br/>
     
          </div>
        )}
      </Modal>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
    </>
  );
};

export default MoviesPage;
