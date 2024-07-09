import React from 'react';

import ImageCard from '../ImageCard/ImageCard';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

import styles from '../ImageGallery/ImageGallery.module.css';

const ImageGallery = ({ images, isLoading, isError, openModal }) => {
  if (isError) return <ErrorMessage />;
  return (
    <>
    <ul className={styles.imageGallery}>
      {images.map((image) => (
        <ImageCard key={image.id} image={image} openModal={openModal}/>
      ))}
    </ul>
    {isLoading && <Loader />}
    </>
  );
};

export default ImageGallery;
