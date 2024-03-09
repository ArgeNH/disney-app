export const URL: string = 'https://api.themoviedb.org/3';
export const API_KEY = import.meta.env.VITE_MOVIE_API_KEY;

export const CATEGORIES: { [key: string]: number | string }[] = [
  {
    id: 28,
    name: 'Action',
  },
  {
    id: 16,
    name: 'Animation',
  },
  {
    id: 35,
    name: 'Comedy',
  },
  {
    id: 18,
    name: 'Drama',
  },
  {
    id: 27,
    name: 'Horror',
  },
];
