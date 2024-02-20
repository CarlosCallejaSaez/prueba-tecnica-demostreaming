import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../../AppContext';
import styles from './ContentList.module.css';
import defaultImage from '../../../assets/Image-not-found.png';
import ItemModal from '../ItemModal/ItemModal';
import ContentFilter from '../ContentFilter/ContentFilter';
import Pagination from '../Pagination/Pagination';

import jsonData from '../../sample.json'; 

const ContentList = ({ contentType, contentData }) => {
  const { state, dispatch } = useContext(AppContext);
  const [selectedItem, setSelectedItem] = useState(null);
  const [year, setYear] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(20);

  const filterAndSortContent = (data, contentType, releaseYear) => {
    return data.entries
      .filter(entry => entry.programType === contentType && entry.releaseYear >= releaseYear)
      .sort((a, b) => a.title.localeCompare(b.title))
      .slice(0, 20); 
  };

  useEffect(() => {
    dispatch({ type: 'FETCH_START' });
    try {
      
      const data = jsonData;
      const filteredSeries = filterAndSortContent(data, 'series', 2010);
      const filteredMovies = filterAndSortContent(data, 'movie', 2010);
      const filteredData = { series: filteredSeries, movies: filteredMovies };
      dispatch({ type: 'FETCH_SUCCESS', payload: filteredData });
    } catch (error) {
      dispatch({ type: 'FETCH_ERROR', payload: error.toString() });
    }
  }, [dispatch]); 

  const addDefaultSrc = (ev) => {
    ev.target.src = defaultImage;
  };

  const openModal = (item) => {
    setSelectedItem(item);
  };

  const filteredContent = contentData.filter(
    (item) => !year || item.releaseYear === parseInt(year, 10)
  );

  const nextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(prevPage => prevPage - 1);
  };

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = filteredContent.slice(firstItemIndex, lastItemIndex);

  const totalItems = filteredContent.length;

  return (
    <>
      <div>
        {!state.loading && !state.error && (
          <>
            <ContentFilter 
              year={year} 
              setYear={setYear} 
              itemsPerPage={itemsPerPage} 
              setItemsPerPage={setItemsPerPage} 
            />
            <Pagination 
              currentPage={currentPage}
              itemsPerPage={itemsPerPage}
              totalItems={totalItems}
              onNextPage={nextPage}
              onPrevPage={prevPage}
            />
          </>
        )}
      </div>
      <div className={styles.container}>
        {currentItems.map((item, index) => (
          <div key={index} className={styles.card} onClick={() => openModal(item)}>
            <img onError={addDefaultSrc} src={item.images['Poster Art'].url} alt={item.title} className={styles.cardImage} />
            <p className={styles.cardTitle}>{item.title}</p>
          </div>
        ))}
      </div>
      <ItemModal
        show={selectedItem !== null}
        onClose={() => setSelectedItem(null)}
        selectedItem={selectedItem}
      />
    </>
  );
};

export default ContentList;
