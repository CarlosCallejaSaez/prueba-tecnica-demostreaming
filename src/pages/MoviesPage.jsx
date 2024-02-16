import React, { useContext } from 'react';
import { AppContext } from '../AppContext';

const MoviesPage = () => {
  const { state } = useContext(AppContext);
  const { movies } = state;

  return (
    <div>
      {movies.map((item, index) => (
        <div key={index}>
          <img src={item.images['Poster Art'].url} alt={item.title} />
          <h3>{item.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default MoviesPage;
