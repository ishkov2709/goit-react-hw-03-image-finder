import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '35683515-755808cb63fe444becf5469f8';
const PER_PAGE = 12;

const fetchImages = (page, value) => {
  return axios.get(
    `?key=${API_KEY}&q=${value}&page=${page}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}`
  );
};

export default fetchImages;
