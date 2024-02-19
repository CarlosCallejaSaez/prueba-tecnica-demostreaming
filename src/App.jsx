import React, { useContext, useEffect } from 'react';
import { AppProvider, AppContext } from './AppContext'; 
import SeriesPage from './pages/SeriesPage';
import MoviesPage from './pages/MoviesPage';
import HomePage from './pages/HomePage';
import Layout from "../src/components/Layout/Layout"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "./App.css"
const App = () => {

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
