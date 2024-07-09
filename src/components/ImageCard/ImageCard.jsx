import React from 'react';

import styles from '../ImageCard/ImageCard.module.css';

const ImageCard = ({ image, openModal }) => {
  const handleClick = () => {
    openModal(image.urls.regular); 
  };

  return (
    <li className={styles.imageCard}>
      <div onClick={handleClick} className={styles.imageContainer}>
        <img src={image.urls.small} alt={image.alt_description} className={styles.image} />
      </div>
    </li>
  );
};

export default ImageCard;
