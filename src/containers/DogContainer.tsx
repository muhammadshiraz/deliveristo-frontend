import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDogImages } from '../services/apiService';
import { FETCH_DOG_IMAGES } from '../store/actions';
import DogImage from '../components/DogImage';
import ImageList from '../components/ImageList';

const DogContainer: React.FC = () => {
  const dispatch = useDispatch();
  const dogImages = useSelector((state: any) => state.dogImages);

  const refreshImages = useCallback(() => {
    fetchDogImages('breeds/image/random/3').then((images) => {
      dispatch({ type: FETCH_DOG_IMAGES, payload: images });
    });
  }, [dispatch]);

  useEffect(() => {
    refreshImages();
  }, [refreshImages]);

  return (
    <div>
      <h2>Random Dog Images</h2>
      <DogImage imageUrl={dogImages[0]} />
      <h2>Dog Breed Images</h2>
      <ImageList images={dogImages.slice(1)} onRefresh={refreshImages} />
    </div>
  );
};

export default DogContainer;
