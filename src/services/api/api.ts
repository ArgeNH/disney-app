import { API_KEY } from '../../constants/constants';
import { fetchRequest } from '../../helpers/fetchResquest';

export const getAllMoviesService = async ({ page }: { page: number }) => {
  const response = await fetchRequest(
    `/discover/movie?with_companies=2&api_key=${API_KEY}&page=${page}`,
  );

  return response.data;
};

export const getMoviesPerCategoryService = async (categoryId: number) => {
  const response = await fetchRequest(
    `/discover/movie?with_companies=2&with_genres=${categoryId}&api_key=${API_KEY}`,
  );

  return response.data;
};

export const getMovieDetailService = async (movieId: number) => {
  const response = await fetchRequest(`/movie/${movieId}?api_key=${API_KEY}`);

  return response.data;
};
