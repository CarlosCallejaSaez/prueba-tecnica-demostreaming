import React from 'react';

const Pagination = ({ currentPage, itemsPerPage, totalItems, onNextPage, onPrevPage }) => {
  const lastItemIndex = currentPage * itemsPerPage;
  const prevButtonDisabled = currentPage === 1;
  const nextButtonDisabled = lastItemIndex >= totalItems;

  return (
    <div className="pagination">
      <button onClick={onPrevPage} disabled={prevButtonDisabled}>Previous Page</button>
      <button onClick={onNextPage} disabled={nextButtonDisabled}>Next Page</button>
    </div>
  );
};

export default Pagination;
