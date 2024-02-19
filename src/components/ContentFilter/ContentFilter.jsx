
import React from 'react';

const ContentFilter = ({ year, setYear, itemsPerPage, setItemsPerPage }) => {
  return (
    <>
      <label>Filter by Year: </label>
      <input type="text" value={year} onChange={(event) => setYear(event.target.value)} />
      <label> Items per page: </label>
      <select value={itemsPerPage} onChange={(event) => setItemsPerPage(Number(event.target.value))}>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
      </select>
    </>
  );
};

export default ContentFilter;
