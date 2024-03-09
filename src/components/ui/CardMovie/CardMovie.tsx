import { IMAGE_URL } from '../../../constants/constants';
import { Movie } from '../../../types';
import './card.css';

interface CardMovieProps {
  movie: Movie;
}

const CardMovie = ({ movie }: CardMovieProps) => {
  return (
    <div className="relative w-full bg-cover bg-center rounded-lg overflow-hidden card-container">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src={`${IMAGE_URL}${movie?.backdrop_path}`}
        alt={movie?.original_title}
      />
      <div id="info" className="info-container">
        <div className="px-6 py-4">
          <h2 className="text-white text-md font-semibold overflow-hidden whitespace-nowrap overflow-ellipsis">
            {movie?.original_title}
          </h2>
        </div>
        <div className="flex justify-between px-4">
          <button className="text-white text-sm font-extrabold rounded-full border-2 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 5l0 14" />
              <path d="M5 12l14 0" />
            </svg>
          </button>
          <button className="text-white text-sm font-extrabold rounded-full border-2 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
            </svg>
          </button>
          <button className="text-white text-sm font-extrabold rounded-full border-2 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
              <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
              <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardMovie;
