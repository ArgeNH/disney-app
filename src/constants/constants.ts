import ComedySvg from '../components/icons/ComedySvg';
import HorrorSvg from '../components/icons/HorrorSvg';

export const URL: string = 'https://api.themoviedb.org/3';
export const API_KEY = import.meta.env.VITE_MOVIE_API_KEY;
export const IMAGE_URL = import.meta.env.VITE_IMAGES_URL;

type CategoriesType = {
  id: number;
  name: string;
  Icon?: () => JSX.Element;
};

export const CATEGORIES: CategoriesType[] = [
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
    Icon: ComedySvg,
  },
  {
    id: 18,
    name: 'Drama',
  },
  {
    id: 27,
    name: 'Horror',
    Icon: HorrorSvg,
  },
];
