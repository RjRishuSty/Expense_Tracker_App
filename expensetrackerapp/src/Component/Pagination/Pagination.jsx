import React from "react";
import Styles from "./Pagination.module.css";

const Pagination = ({ dataLength, itemsPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(dataLength / itemsPerPage);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    onPageChange(page);
  };

  return (
    <div className={Styles.pagination}>
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={Styles.btn}
      >
        &lt;
      </button>
      <span className={Styles.page}>{currentPage}</span>
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={Styles.btn}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
