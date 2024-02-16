import React, { useContext, useEffect } from 'react';
import { AppProvider, AppContext } from './AppContext'; 
import SeriesPage from './pages/SeriesPage';
import MoviesPage from './pages/MoviesPage';
import HomePage from './pages/HomePage';
import Layout from "../src/components/Layout/Layout"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "./App.css"
const App = () => {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_START' });
      try {
        const response = await fetch('/data/sample.json'); 
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
  if (state.error) return <div>Oops, something went wrong...</div>;

  return (

    <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="series" element={<SeriesPage />} />
            <Route path="movies" element={<MoviesPage />} />
          </Route>
        </Routes>
      </Router>
    
  );
};


export default App;
