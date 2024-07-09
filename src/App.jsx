import React, { useState, useEffect } from 'react';
import axios from 'axios';

import SearchBar from './components/SearchBar/SearchBar.jsx';
import ImageGallery from './components/ImageGallery/ImageGallery.jsx';
import Loader from './components/Loader/Loader.jsx';
import ErrorMessage from './components/ErrorMessage/ErrorMessage.jsx';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn.jsx';
import ImageModal from './components/ImageModal/ImageModal.jsx';

const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!query) return;

    const fetchImages = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const response = await axios.get(`https://api.unsplash.com/search/photos`, {
          params: {
            query,
            page,
            per_page: 16, // or any other number of results per page
            client_id: 'HvEk12_6yyeGK0h_S46Ohywik4EVPRIYYx2Vuy40PXo', // replace with your Unsplash access key !!!!
          }, 
        });

        setImages((prevImages) => [...prevImages, ...response.data.results]);
      } catch (error) {
        setIsError(true);
        console.error('Error fetching images:', error);
      }

      setIsLoading(false);
    };

    fetchImages();
  }, [query, page]);

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
    setPage(1);
    setImages([]);
  };

  const loadMoreImages = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openImageModal = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      <ImageGallery images={images} isLoading={isLoading} isError={isError} openModal={openImageModal} />
      {isError && <ErrorMessage />}
      {images.length > 0 && <LoadMoreBtn onClick={loadMoreImages} />}
      {selectedImage && <ImageModal isOpen={true} onRequestClose={closeImageModal} imageUrl={selectedImage} />}
    </div>
  );
};

export default App;
