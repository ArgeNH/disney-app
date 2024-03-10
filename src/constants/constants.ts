import {
  ActionSvg,
  AnimationSvg,
  ComedySvg,
  DramaSvg,
  HorrorSvg,
} from '../components/icons';

export const URL: string = 'https://api.themoviedb.org/3';
export const API_KEY = import.meta.env.VITE_MOVIE_API_KEY;
export const IMAGE_URL = import.meta.env.VITE_IMAGES_URL;

export type CategoryType = {
  id: number;
  name: string;
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
};

export const CATEGORIES: CategoryType[] = [
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
