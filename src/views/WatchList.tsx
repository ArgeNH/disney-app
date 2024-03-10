import { useMovies } from '@nh/context';
import { Layout } from '@nh/components/Layout';
import CardMovie from '@nh/components/ui/CardMovie/CardMovie';

const WatchList = () => {
  const { watchLaterMovies } = useMovies();
  return (
    <Layout title="My Watch List">
      <div className="grid grid-cols-1 gap-4 w-full h-full md:grid-cols-4">
        {watchLaterMovies.map((movie) => (
          <CardMovie key={movie.id} movie={movie} />
        ))}
      </div>

      {watchLaterMovies.length === 0 && (
        <div className="flex items-center justify-center h-1/2">
          <p className="text-2xl font-bold text-gray-500">
            No movies in watch list
          </p>
        </div>
      )}
    </Layout>
  );
};

export default WatchList;
