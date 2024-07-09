import React from 'react';
import styles from '../LoadMoreBtn/LoadMoreBtn.module.css'

const LoadMoreBtn = ({ onClick }) => {
  const handleClick = (event) => {
    event.preventDefault();
    onClick(); 
    return false; 
  };

  return (
    <button onClick={handleClick} type="button" className={styles.loadMoreBtn}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
