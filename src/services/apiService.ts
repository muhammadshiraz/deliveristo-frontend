import axios from 'axios';

export const fetchDogImages = async (endpoint: string) => {
  const response = await axios.get(`https://dog.ceo/api/${endpoint}`);
  return response.data.message;
};
