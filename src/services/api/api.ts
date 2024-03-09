import { API_KEY } from '../../constants/constants';
import { fetchRequest } from '../../helpers/fetchResquest';

export const getAllMoviesService = async () => {
  const response = await fetchRequest(
    `/discover/movies?with_companies=2&api_key=${API_KEY}`,
  );

  console.log(response);
  return response.data;
};

export const getMoviesPerCategoryService = async (categoryId: number) => {
  const response = await fetchRequest(
    `/discover/movies?with_companies=2&with_genres=${categoryId}&api_key=${API_KEY}`,
  );

  console.log(response);
  return response.data;
};

export const getMovieDetailService = async (movieId: number) => {
  const response = await fetchRequest(`/movie/${movieId}?api_key=${API_KEY}`);

  console.log(response);
  return response.data;
};
