import { FirebaseError } from 'firebase/app';
import { useLocation } from 'react-router-dom';
import { toast } from 'sonner';

import { useAuth, useMovies } from '@nh/context';
import { IconButton } from '@nh/components/buttons/IconButton';
import { handleFirebaseError } from '@nh/utils/handleFirebaseError';
import {
  AddSvg,
  DotSvg,
  FavoriteSvg,
  NoFavoriteSvg,
  RemoveSvg,
} from '@nh/components/icons';
import { IMAGE_URL } from '@nh/constants/constants';
import { Movie } from '@nh/types';

import './card.css';

interface CardMovieProps {
  movie: Movie;
}

const CardMovie = ({ movie }: CardMovieProps) => {
  const {
    setIdMovie,
    selectFavoriteMovie,
    selectWatchLaterMovie,
    deleteFavoriteMovie,
    deleteWatchLaterMovie,
  } = useMovies();

  const { user } = useAuth();

  const location = useLocation();

  const handleAddToFavorites = async (movie: Movie, uid: string) => {
    try {
      await selectFavoriteMovie!(movie, uid);

      toast.success(`${movie.original_title} Added to favorites`);
    } catch (error) {
      if (error instanceof FirebaseError) {
        const errorMessage = handleFirebaseError(error);
        toast.error(errorMessage);
      } else {
        const msgError =
          error instanceof Error ? error.message : 'An error occurred';
        toast.error(msgError);
      }
    }
  };

  const handleAddToWatchLater = async (movie: Movie, uid: string) => {
    try {
      await selectWatchLaterMovie!(movie, uid);

      toast.success(`${movie.original_title} Added to watch later`);
    } catch (error) {
      if (error instanceof FirebaseError) {
        const errorMessage = handleFirebaseError(error);
        toast.error(errorMessage);
      } else {
        const msgError =
          error instanceof Error ? error.message : 'An error occurred';
        toast.error(msgError);
      }
    }
  };

  const handleDeleteFavorite = async (uid: string) => {
    try {
      await deleteFavoriteMovie!(uid);

      toast.success('Movie removed from favorites');
    } catch (error) {
      if (error instanceof FirebaseError) {
        const errorMessage = handleFirebaseError(error);
        toast.error(errorMessage);
      } else {
        const msgError =
          error instanceof Error ? error.message : 'An error occurred';
        toast.error(msgError);
      }
    }
  };

  const handleDeleteCollection = async (uid: string) => {
    try {
      await deleteWatchLaterMovie!(uid);

      toast.success('Movie removed from watch list');
    } catch (error) {
      if (error instanceof FirebaseError) {
        const errorMessage = handleFirebaseError(error);
        toast.error(errorMessage);
      } else {
        const msgError =
          error instanceof Error ? error.message : 'An error occurred';
        toast.error(msgError);
      }
    }
  };

  return (
    <div className="relative w-full h-72 bg-cover bg-center rounded-lg overflow-hidden card-container">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src={
          movie?.backdrop_path
            ? `${IMAGE_URL}${movie?.backdrop_path}`
            : '/noimage.jpeg'
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
          {location.pathname === '/' && (
            <>
              <IconButton
                icon={<AddSvg />}
                tooltip="Add to Watch list"
                direction="tooltip-right"
                action={() => handleAddToWatchLater(movie, user!.uid)}
              />

              <IconButton
                icon={<FavoriteSvg />}
                tooltip="Add to favorites"
                action={() => handleAddToFavorites(movie, user!.uid)}
              />
            </>
          )}

          {location.pathname === '/favorites' && (
            <IconButton
              icon={<NoFavoriteSvg />}
              tooltip="Remove to favorites"
              direction="tooltip-right"
              action={() => {
                if (movie.uid) {
                  handleDeleteFavorite(movie.uid);
                }
              }}
            />
          )}

          {location.pathname === '/watch_list' && (
            <IconButton
              icon={<RemoveSvg />}
              tooltip="Remove to watch list"
              direction="tooltip-right"
              action={() => {
                if (movie.uid) {
                  handleDeleteCollection(movie.uid);
                }
              }}
            />
          )}

          <IconButton
            icon={<DotSvg />}
            tooltip="More information"
            direction="tooltip-left"
            action={() => {
              (
                document.getElementById('my_modal_4') as HTMLDialogElement
              )?.showModal();

              setIdMovie!(movie.id);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CardMovie;
