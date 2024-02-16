import React, { useContext, useState } from 'react';
import { AppContext } from '../AppContext';
import Modal from '../components/Modal/Modal';
import styles from './SeriesPage.module.css'; 
import defaultImage from '../../assets/Image-not-found.png'

const SeriesPage = () => {
  const { state, dispatch } = useContext(AppContext);
  const [selectedItem, setSelectedItem] = useState(null);
  const [year, setYear] = useState('');
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

  const filteredSeries = state.series.filter((item) => state.filterYear === 0 || item.releaseYear === state.filterYear);

  const handlePageSizeChange = (event) => {
    dispatch({ type: 'SET_PAGE_SIZE', payload: parseInt(event.target.value, 10) });
    dispatch({ type: 'SET_CURRENT_PAGE', payload: 1 });
  };

  const goToPage = (pageNumber) => {
    dispatch({ type: 'SET_CURRENT_PAGE', payload: pageNumber });
  };

  const totalPages = Math.ceil(filteredSeries.length / state.pageSize);

  const paginatedSeries = filteredSeries.slice(
    (state.currentPage - 1) * state.pageSize,
    state.currentPage * state.pageSize
  );

  return (
    <div>
      <select value={state.pageSize} onChange={handlePageSizeChange} className={styles.pageSizeSelector}>
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
        onClick={() => goToPage(state.currentPage - 1)} 
        disabled={state.currentPage === 1}
        className={styles.paginationButton}
      >
        Previous
      </button>
      <button 
        onClick={() => goToPage(state.currentPage + 1)} 
        disabled={state.currentPage === totalPages}
        className={styles.paginationButton}
      >
        Next
      </button>
      <div className={styles.container}>
        {paginatedSeries.map((item, index) => (
          <div key={index} className={styles.card} onClick={() => openModal(item)}>
            <img onError={addDefaultSrc}  src={item.images['Poster Art'].url} alt={item.title} className={styles.cardImage} />
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardSubTitle}>Program Title</p>
          </div>
        ))}
      </div>
     
      <Modal show={selectedItem !== null} onClose={closeModal}>
        {selectedItem && (
          <div className={styles.modalContent}>
            <h2>{selectedItem.title}</h2>
            <p>{selectedItem.description}</p>
            <p>Release Year: {selectedItem.releaseYear}</p>
            <img onError={addDefaultSrc} style={{ width: '200px' }}src={selectedItem.images['Poster Art'].url} alt={selectedItem.title} className={styles.modalImage} />
          </div>
        )}
      </Modal>
    </div>
  );
};

export default SeriesPage;
