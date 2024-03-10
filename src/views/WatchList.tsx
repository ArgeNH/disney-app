import { useMovies } from '../context';
import { Layout } from '../components/Layout';
import CardMovie from '../components/ui/CardMovie/CardMovie';

const WatchList = () => {
  const { watchLaterMovies } = useMovies();
  return (
    <Layout title="My Watch List">
      <div className="grid grid-cols-1 gap-4 w-full h-full md:grid-cols-4">
        {watchLaterMovies.map((movie) => (
          <CardMovie key={movie.id} movie={movie} />
        ))}
      </div>
    </Layout>
  );
};

export default WatchList;
