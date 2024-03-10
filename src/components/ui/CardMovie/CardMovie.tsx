import { IMAGE_URL } from '../../../constants/constants';
import { useMovies } from '../../../context/MoviesContext';
import { Movie } from '../../../types';
import { IconButton } from '../../buttons/IconButton';
import AddSvg from '../../icons/AddSvg';
import DotSvg from '../../icons/DotSvg';
import FavoriteSvg from '../../icons/FavoriteSvg';
import './card.css';

interface CardMovieProps {
  movie: Movie;
}

const CardMovie = ({ movie }: CardMovieProps) => {
  const { setIdMovie } = useMovies();
  return (
    <div className="relative w-full h-64 bg-cover bg-center rounded-lg overflow-hidden card-container md:h-auto">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src={
          movie?.backdrop_path
            ? `${IMAGE_URL}${movie?.backdrop_path}`
            : '/public/noimage.jpeg'
        }
        alt={movie?.original_title}
      />
      <div id="info" className="info-container">
        <div className="px-6 py-4">
          <h2 className="text-white text-md font-semibold overflow-hidden whitespace-nowrap overflow-ellipsis">
            {movie?.original_title}
          </h2>
        </div>
        <div className="flex justify-between px-4">
          <IconButton
            icon={<AddSvg />}
            tooltip="Add to Watch list"
            direction="tooltip-right"
            action={() => console.log('Add to Watch list')}
          />

          <IconButton
            icon={<FavoriteSvg />}
            tooltip="Add to favorites"
            action={() => console.log('Add to favorites')}
          />

          <IconButton
            icon={<DotSvg />}
            tooltip="More information"
            direction="tooltip-left"
            action={() => {
              (
                document.getElementById('my_modal_4') as HTMLDialogElement
              )?.showModal();

              if (movie?.id && setIdMovie) {
                setIdMovie(movie.id);
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CardMovie;
