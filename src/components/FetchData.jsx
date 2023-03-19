import axios from 'axios';

const API_KEY = '556357bfa8b76a1ca568b380d0c6c76a';
const BASE_URL = 'https://api.themoviedb.org/3/';
export const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

export const FetchTrending = async () => {
  return await axios.get(`${BASE_URL}trending/all/day?api_key=${API_KEY}`);
};

export const FetchSingleMovie = async movie_id => {
  return await axios.get(
    `${BASE_URL}movie/${movie_id}?api_key=${API_KEY}&language=en-US`
  );
};

export const FetchSearchMovie = async search => {
  return await axios.get(
    `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${search}`
  );
};

export const FetchCast = async movie_id => {
  return await axios.get(
    `${BASE_URL}movie/${movie_id}/credits?api_key=${API_KEY}&language=en-US`
  );
};

export const FetchReviews = async movie_id => {
  return await axios.get(
    `${BASE_URL}movie/${movie_id}/reviews?api_key=${API_KEY}&language=en-US`
  );
};
