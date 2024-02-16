import React, { useContext } from 'react';
import { AppContext } from '../AppContext';

const SeriesPage = () => {
  const { state } = useContext(AppContext);
  const { series } = state;

  return (
    <div>
      {series.map((item, index) => (
        <div key={index}>
          <img src={item.images['Poster Art'].url} alt={item.title} />
          <h3>{item.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default SeriesPage;
