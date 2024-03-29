import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Estado inicial
const initialState = {
  loading: false,
  error: null,
  series: [],
  movies: [],
  filterYear: 0,
  currentPage: 1,
  pageSize: 10,
};

// Crear contexto
export const AppContext = createContext(initialState);

// Proveedor del contexto
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
