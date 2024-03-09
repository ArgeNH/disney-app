/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from 'react';

import { useAuth } from '../context/AuthContext';
import Navbar from '../components/header';
import Tabs from '../components/tabs';
import CardMovie from '../components/ui/CardMovie/CardMovie';
import { Movie } from '../types';
import { getAllMoviesService } from '../services/api/api';

const Home = () => {
  const { user, loading } = useAuth();

  console.log(user);

  const [movies, setMovies] = useState<Movie[]>([]);

  const getMovies = async () => {
    try {
      const { results } = await getAllMoviesService();

      setMovies(results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  if (loading) return <h1>Loading...</h1>;

  return (
    <>
      <Navbar />
      <div className="h-full bg-brand-900/60 px-6 pb-4">
        <div className="container mx-auto pt-20">
          <Tabs />
        </div>

        <section className="flex justify-center items-center mt-3">
          <div className="grid grid-cols-4 gap-4 w-full h-screen">
            {movies.map((movie) => (
              <CardMovie key={movie.id} movie={movie} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
