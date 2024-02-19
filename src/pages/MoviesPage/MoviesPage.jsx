import React, { useContext, useState } from 'react';
import { AppContext } from '../../AppContext';
import Modal from '../../components/Modal/Modal';
import TopBar from "../../components/TopBar/TopBar"


import ContentList from '../../components/ContentList/ContentList';

const MoviesPage = () => {
  const { state } = useContext(AppContext);

  return (
    <>
      <TopBar title="Popular Movies" />
      <ContentList contentType="Series" contentData={state.series} />;
    </>
  )
};

export default MoviesPage;
