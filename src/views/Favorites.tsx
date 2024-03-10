import { useMovies } from '../context/MoviesContext';
import CardMovie from '../components/ui/CardMovie/CardMovie';

import { Layout } from '../components/Layout';

const Favorites = () => {
  const { favoriteMovies } = useMovies();

  return (
    <Layout title="My Favorites Movies">
      <div className="grid grid-cols-1 gap-4 w-full h-full md:grid-cols-4">
        {favoriteMovies.map((movie) => (
          <CardMovie key={movie.id} movie={movie} isFavorite />
        ))}
      </div>
    </Layout>
  );
};

export default Favorites;
