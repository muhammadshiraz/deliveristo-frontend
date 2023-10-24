import React from 'react';
import './DogImage.css';

interface DogImageProps {
  imageUrl: string;
}

const DogImage: React.FC<DogImageProps> = ({ imageUrl }) => {
  return <div className='dogImage'><img src={imageUrl} alt="Dog" /></div>;
};

export default DogImage;
