/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useContext, useState, useEffect } from 'react';
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
} from 'firebase/firestore';
import type { PropsWithChildren } from 'react';

import { Movie } from '../types';
import { db } from '../services/firebase/firebase';
import { useAuth } from './AuthContext';

type MoviesContextType = {
  idMovie: number | null;
  favoriteMovies: Movie[];
  watchLaterMovies: Movie[];
  setIdMovie?: React.Dispatch<React.SetStateAction<number | null>>;
  selectFavoriteMovie?: (movie: Movie, uid: string) => Promise<void>;
  selectWatchLaterMovie?: (movie: Movie, uid: string) => Promise<void>;
  deleteFavoriteMovie?: (id: string) => Promise<void>;
  deleteWatchLaterMovie?: (id: string) => Promise<void>;
};

const initialValue: MoviesContextType = {
  idMovie: null,
  favoriteMovies: [],
  watchLaterMovies: [],
  setIdMovie: () => {},
  selectFavoriteMovie: async () => {},
  selectWatchLaterMovie: async () => {},
  deleteFavoriteMovie: async () => {},
  deleteWatchLaterMovie: async () => {},
};

export const MoviesContext = createContext<MoviesContextType>(initialValue);

export const MoviesProvider = ({ children }: PropsWithChildren) => {
  const { user } = useAuth();

  const [idMovie, setIdMovie] = useState<number | null>(null);
  const [favoriteMovies, setFavoriteMovies] = useState<Movie[]>([]);
  const [watchLaterMovies, setWatchLaterMovies] = useState<Movie[]>([]);

  const selectFavoriteMovie = async (movie: Movie, uid: string) => {
    const existingMovie = favoriteMovies.find((m) => m.id === movie.id);

    if (existingMovie) {
      throw new Error('Movie already exists in favorites');
    }

    const newMovie = {
      id: movie.id,
      original_title: movie.original_title,
      backdrop_path: movie.backdrop_path,
    };

    const newDoc = doc(collection(db, `users/${uid}/favorite`));
    await setDoc(newDoc, newMovie);

    setFavoriteMovies((prev) => [...prev, movie]);
  };

  const selectWatchLaterMovie = async (movie: Movie, uid: string) => {
    const existingMovie = watchLaterMovies.find((m) => m.id === movie.id);

    if (existingMovie) {
      throw new Error('Movie already exists in watch later');
    }

    const newMovie = {
      id: movie.id,
      original_title: movie.original_title,
      backdrop_path: movie.backdrop_path,
    };

    const newDoc = doc(collection(db, `users/${uid}/watchLater`));
    await setDoc(newDoc, newMovie);

    setWatchLaterMovies((prev) => [...prev, movie]);
  };

  const getFavoriteMovies = async (uid: string) => {
    const queryFavorites = collection(db, `users/${uid}/favorite`);

    const docs = await getDocs(queryFavorites);
    const movies = docs.docs.map((doc) => ({
      uid: doc.id,
      ...doc.data(),
    })) as Movie[];

    setFavoriteMovies(movies);
  };

  const getWatchLaterMovies = async (uid: string) => {
    const queryWatchLater = collection(db, `users/${uid}/watchLater`);

    const docs = await getDocs(queryWatchLater);
    const movies = docs.docs.map((doc) => ({
      uid: doc.id,
      ...doc.data(),
    })) as Movie[];

    setWatchLaterMovies(movies);
  };

  const deleteFavoriteMovie = async (uid: string) => {
    const query = doc(collection(db, `users/${user?.uid}/favorite`), uid);
    await deleteDoc(query);

    setFavoriteMovies((prev) => prev.filter((movie) => movie.uid !== uid));
  };

  const deleteWatchLaterMovie = async (uid: string) => {
    const query = doc(collection(db, `users/${user?.uid}/watchLater`), uid);
    await deleteDoc(query);

    setWatchLaterMovies((prev) => prev.filter((movie) => movie.uid !== uid));
  };

  useEffect(() => {
    if (user) {
      getFavoriteMovies(user.uid);
      getWatchLaterMovies(user.uid);
    }
  }, [user]);

  return (
    <MoviesContext.Provider
      value={{
        idMovie,
        setIdMovie,
        favoriteMovies,
        watchLaterMovies,
        selectFavoriteMovie,
        selectWatchLaterMovie,
        deleteFavoriteMovie,
        deleteWatchLaterMovie,
      }}
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
