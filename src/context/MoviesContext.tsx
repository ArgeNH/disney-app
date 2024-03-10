/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useContext, useState } from 'react';
import type { PropsWithChildren } from 'react';

import { Movie } from '../types';

type MoviesContextType = {
  idMovie: number | null;
  favoriteMovies: Movie[];
  watchLaterMovies: Movie[];
  setIdMovie?: React.Dispatch<React.SetStateAction<number | null>>;
  favoriteMovie?: (id: number) => void;
  watchLaterMovie?: (id: number) => void;
};

const initialValue: MoviesContextType = {
  idMovie: null,
  favoriteMovies: [],
  watchLaterMovies: [],
  setIdMovie: () => {},
  favoriteMovie: () => {},
  watchLaterMovie: () => {},
};

export const MoviesContext = createContext<MoviesContextType>(initialValue);

export const MoviesProvider = ({ children }: PropsWithChildren) => {
  const [idMovie, setIdMovie] = useState<number | null>(null);
  const [favoriteMovies] = useState<Movie[]>([]); // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [watchLaterMovies] = useState<Movie[]>([]);

  return (
    <MoviesContext.Provider
      value={{ idMovie, setIdMovie, favoriteMovies, watchLaterMovies }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export const useMovies = () => {
  const context = useContext(MoviesContext);

  if (!context)
    throw new Error('useMovies must be used within a MoviesProvider');

  return context;
};
