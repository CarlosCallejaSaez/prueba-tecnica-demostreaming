import React from 'react';
import { Outlet } from 'react-router-dom';
import TopBar from '../TopBar/TopBar';

const BodyContent = ({ isLoading, isError }) => {



  if (isLoading || isError) {
    return (
      <>
        <TopBar title="Popular Titles" />
        <div style={{ margin: "50px" }}>
          {isLoading ? "Loading..." : "Oops, something went wrong"}
        </div>
      </>
    );
  }

  return <Outlet />;
};

export default BodyContent;