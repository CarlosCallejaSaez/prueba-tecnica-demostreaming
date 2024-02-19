import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../../AppContext';

import styles from './ContentList.module.css';
import defaultImage from '../../../assets/Image-not-found.png';
import ItemModal from '../ItemModal/ItemModal';
import ContentFilter from '../ContentFilter/ContentFilter';
import Pagination from '../Pagination/Pagination';


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
            <h3 className={styles.cardTitle}>{item.title}</h3>
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
