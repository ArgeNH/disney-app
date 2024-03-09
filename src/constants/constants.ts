import ActionSvg from '../components/icons/ActionSvg';
import AnimationSvg from '../components/icons/AnimationSvg';
import ComedySvg from '../components/icons/ComedySvg';
import DramaSvg from '../components/icons/DramaSvg';
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
    Icon: ActionSvg,
  },
  {
    id: 16,
    name: 'Animation',
    Icon: AnimationSvg,
  },
  {
    id: 35,
    name: 'Comedy',
    Icon: ComedySvg,
  },
  {
    id: 18,
    name: 'Drama',
    Icon: DramaSvg,
  },
  {
    id: 27,
    name: 'Horror',
    Icon: HorrorSvg,
  },
];
