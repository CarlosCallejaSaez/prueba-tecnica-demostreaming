import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../../AppContext';
import Modal from '../Modal/Modal';
import styles from './ContentList.module.css';
import defaultImage from '../../../assets/Image-not-found.png';


const ContentList = ({ contentType, contentData }) => {
  const { state, dispatch } = useContext(AppContext);
  const [selectedItem, setSelectedItem] = useState(null);
  const [year, setYear] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(20);

  const sampleJsonUrl = new URL('../../../public/sample.json', import.meta.url).href;
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_START' });
      try {
        const response = await fetch(sampleJsonUrl); 
        const data = await response.json();
        const filteredData = {
          series: data.entries
            .filter(entry => entry.programType === 'series' && entry.releaseYear >= 2010)
            .sort((a, b) => a.title.localeCompare(b.title))
            .slice(0, 20),
          movies: data.entries
            .filter(entry => entry.programType === 'movie' && entry.releaseYear >= 2010)
            .sort((a, b) => a.title.localeCompare(b.title))
            .slice(0, 20),
        };
        dispatch({ type: 'FETCH_SUCCESS', payload: filteredData });
      } catch (error) {
        dispatch({ type: 'FETCH_ERROR', payload: error.toString() });
      }
    };

    fetchData();
  }, [dispatch]);

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
    dispatch({ type: `SET_FILTER_YEAR_${contentType.toUpperCase()}`, payload: event.target.value ? parseInt(event.target.value, 10) : 0 });
    setCurrentPage(1); 
  };

  const filteredContent = contentData.filter(
    (item) => !year || item.releaseYear === parseInt(year, 10)
  );

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = filteredContent.slice(firstItemIndex, lastItemIndex);

  const prevButtonDisabled = currentPage === 1;
  const nextButtonDisabled = lastItemIndex >= filteredContent.length;

  return (
    <>
    
      <div>
        {state.loading && <div>Loading...</div>}
        {state.error && <div>Oops, something went wrong...</div>}
        {!state.loading && !state.error && (
          <>
            <label>Filter by Year: </label>
            <input type="text" value={year} onChange={handleYearChange} />
            <label> Items per page: </label>
            <select value={itemsPerPage} onChange={(event) => setItemsPerPage(Number(event.target.value))}>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
            </select>
            <div className={styles.pagination}>
              <button onClick={prevPage} disabled={prevButtonDisabled}>Previous Page</button>
              <button onClick={nextPage} disabled={nextButtonDisabled}>Next Page</button>
            </div>
          </>
        )}
      </div>
      <div className={styles.container}>
        {currentItems.map((item, index) => (
          <div key={index} className={styles.card} onClick={() => openModal(item)}>
            <img onError={addDefaultSrc} src={item.images['Poster Art'].url} alt={item.title} className={styles.cardImage} />
            <h3 className={styles.cardTitle}>{item.title}</h3>
          </div>
        ))}
      </div>
   
      <Modal show={selectedItem !== null} onClose={closeModal}>
        {selectedItem && (
          <div>
            <h2>{selectedItem.title}</h2>
            <p>{selectedItem.description}</p>
            <p>Release Year: {selectedItem.releaseYear}</p>
            <img onError={addDefaultSrc} src={selectedItem.images['Poster Art'].url} alt={selectedItem.title} style={{width:"200px"}} />
          </div>
        )}
      </Modal>
      
    </>
  );
};

export default ContentList;
