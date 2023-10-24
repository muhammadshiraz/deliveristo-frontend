import React from 'react';
import './ImageList.css';

interface ImageListProps {
  images: string[];
  onRefresh: () => void;
}

const ImageList: React.FC<ImageListProps> = ({ images, onRefresh }) => {
  return (
    <>
      <button className="refresh-button" onClick={onRefresh}>Refresh</button>
      <div className="image-container">        
        {images.map((imageUrl, index) => (
          <div className="image-item" key={index}>
            <img src={imageUrl} alt={`Dog ${index}`} />
          </div>
        ))}      
      </div>
    </>
  );
};

export default ImageList;
