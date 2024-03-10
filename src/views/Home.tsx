/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from 'react';
import { toast } from 'sonner';

import { useAuth } from '../context/AuthContext';
import Navbar from '../components/header';
import Tabs from '../components/tabs';
import CardMovie from '../components/ui/CardMovie/CardMovie';
import { Movie } from '../types';
import { getAllMoviesService } from '../services/api/api';
import ContentCategory from '../components/ui/ContentCategory';
import { CategoryType } from '../constants/constants';

const Home = () => {
  const { loading } = useAuth();

  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState<number>(1);
  const [selectCategory, setSelectCategory] = useState<CategoryType | null>(
    null,
  );

  const getMovies = async () => {
    try {
      const { results } = await getAllMoviesService({ page });

      setMovies(results);
    } catch (error) {
      const msgError =
        error instanceof Error ? error.message : 'An error occurred';
      toast.error(`Error fetching movies: ${msgError}`);
    }
  };

  useEffect(() => {
    getMovies();
  }, [page]);

  if (loading) return <h1>Loading...</h1>;

  return (
    <>
      <Navbar />
      <div className="h-full bg-brand-900/60 px-6 pb-4">
        <div className="container mx-auto pt-20">
          <Tabs setSelectCategory={setSelectCategory} />
        </div>

        <section className="flex flex-col justify-center mt-3 gap-2">
          <div
            className={`mt-4 mb-4 overflow-hidden transition-all duration-500 ease-in-out ${
              selectCategory ? 'max-h-full' : 'max-h-0'
            }`}
          >
            <ContentCategory selectCategory={selectCategory} />
          </div>

          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">All Movies</h1>

            <div className="join">
              <button
                className="join-item btn btn-outline bg-transparent btn-sm"
                onClick={() => setPage(page - 1)}
                disabled={page === 1}
              >
                «
              </button>
              <button className="join-item btn btn-outline bg-transparent btn-sm">
                Page {page}
              </button>
              <button
                className="join-item btn btn-outline bg-transparent btn-sm"
                onClick={() => setPage(page + 1)}
              >
                »
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 w-full h-full md:grid-cols-4">
            {movies.map((movie) => (
              <CardMovie key={movie.id} movie={movie} isHome />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
