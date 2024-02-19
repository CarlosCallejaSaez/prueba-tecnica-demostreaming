import React, { useContext, useState } from 'react';
import { AppContext } from '../../AppContext';
import Modal from '../../components/Modal/Modal';
import TopBar from "../../components/TopBar/TopBar"


import ContentList from '../../components/ContentList/ContentList';

const SeriesPage = () => {
  const { state } = useContext(AppContext);

  return (
    <>
      <TopBar title="Popular Series" />
      <ContentList contentType="Series" contentData={state.series} />;
    </>
  )
};

export default SeriesPage;
