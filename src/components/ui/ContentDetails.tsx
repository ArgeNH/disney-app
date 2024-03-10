/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from 'react';
import { toast } from 'sonner';

import { useMovies } from '../../context';
import { getMovieDetailService } from '../../services/api/api';
import { Movie } from '../../types';
import { IMAGE_URL } from '../../constants/constants';

const ContentDetails = () => {
  const { idMovie } = useMovies();

  const [movieDetail, setMovieDetail] = useState<Movie>({} as Movie);
  const [loading, setLoading] = useState<boolean>(false);

  const getMovieDetail = async (movieId: number) => {
    setLoading(true);
    try {
      const data = await getMovieDetailService(movieId);

      setMovieDetail(data);
    } catch (error) {
      const msgError =
        error instanceof Error ? error.message : 'An error occurred';
      toast.error(`Error fetching movies: ${msgError}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (idMovie) {
      getMovieDetail(idMovie);
    }

    return () => {
      setMovieDetail({} as Movie);
    };
  }, [idMovie]);

  return (
    <dialog id="my_modal_4" className="modal">
      <div className="modal-box w-11/12 max-w-5xl">
        <form method="dialog">
          <button className="btn btn-sm bg-transparent btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <div className="hero">
          {!loading ? (
            <div className="hero-content flex-col lg:flex-row">
              <img
                src={
                  movieDetail?.poster_path
                    ? `${IMAGE_URL}${movieDetail?.poster_path}`
                    : '/noimage.jpeg'
                }
                className="max-w-56 rounded-lg shadow-2xl lg:max-w-md"
              />
              <div>
                <h1 className="text-5xl font-bold text-brand-200 underline">
                  {movieDetail?.original_title}
                </h1>
                <p className="py-6">{movieDetail?.overview}</p>

                <h2 className="text-2xl font-bold">Genres</h2>
                <ul className="flex flex-wrap">
                  {movieDetail?.genres?.map((genre) => (
                    <li
                      key={genre.id}
                      className="bg-gray-200 rounded-full px-4 py-2 m-2 text-word-600"
                    >
                      {genre.name}
                    </li>
                  ))}
                </ul>

                <div className="divider"></div>

                <h2 className="text-2xl font-bold">Release date</h2>
                <p>{movieDetail?.release_date}</p>
              </div>
            </div>
          ) : (
            <div className="hero-content flex-col lg:flex-row">
              <div className="skeleton h-72 w-56"></div>
              <div>
                <div className="skeleton h-8 w-full mb-4"></div>
                <div className="skeleton h-20 w-96 mb-4"></div>
                <div className="skeleton h-8 w-96 mb-4"></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </dialog>
  );
};

export default ContentDetails;
