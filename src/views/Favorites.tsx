import { useMovies } from '@nh/context';
import { Layout } from '@nh/components/Layout';
import CardMovie from '@nh/components/ui/CardMovie/CardMovie';

const Favorites = () => {
  const { favoriteMovies } = useMovies();

  return (
    <Layout title="My Favorites Movies">
      <div className="grid grid-cols-1 gap-4 w-full h-full md:grid-cols-4">
        {favoriteMovies.map((movie) => (
          <CardMovie key={movie.id} movie={movie} />
        ))}
      </div>

      {favoriteMovies.length === 0 && (
        <div className="flex items-center justify-center h-1/2">
          <p className="text-2xl font-bold text-gray-500">
            No movies in favorites
          </p>
        </div>
      )}
    </Layout>
  );
};

export default Favorites;
