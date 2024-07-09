import React from 'react';
import Modal from 'react-modal';
import styles from '../ImageModal/ImageModal.module.css';


const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.7)'
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      border: 'none',
      background: 'none',
      padding: 0
    }
  };


const ImageModal = ({ isOpen, onRequestClose, imageUrl }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      ariaHideApp={false}
      style={customStyles}
    >
      <img src={imageUrl} alt="Full size" style={{ maxWidth: '100%', maxHeight: '100%' }} />
    </Modal>
  );
};

export default ImageModal;
