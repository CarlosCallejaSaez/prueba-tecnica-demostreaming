import React, { useContext, useEffect } from 'react';
import { AppProvider, AppContext } from './AppContext'; // Asegúrate de que las rutas sean correctas
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SeriesPage from './pages/SeriesPage';
import MoviesPage from './pages/MoviesPage';

const App = () => {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_START' });
      try {
        const response = await fetch('../data/sample.json'); // Ajusta la ruta según sea necesario
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

  if (state.loading) return <div>Loading...</div>;
  if (state.error) return <div>Error: {state.error}</div>;

  return (

    <Router>
      <Routes>
        <Route path="/series" element={<SeriesPage />} />
        <Route path="/movies" element={<MoviesPage />} />
      </Routes>
    </Router>
    
  );
};


export default App;
