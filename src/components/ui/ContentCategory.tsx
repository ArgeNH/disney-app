import { useState, useEffect } from 'react';
import { toast } from 'sonner';

import { Movie } from '../../types';
import { getMoviesPerCategoryService } from '../../services/api/api';
import CardMovie from './CardMovie/CardMovie';
import { Skeleton } from '../Skeleton';
import { CategoryType } from '../../constants/constants';

interface ContentCategoryProps {
  selectCategory: CategoryType | null;
}

const ContentCategory = ({ selectCategory }: ContentCategoryProps) => {
  const [moviesCategory, setMoviesCategory] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);

  const getMoviesPerCategory = async (categoryId: number) => {
    setLoading(true);
    try {
      const { results } = await getMoviesPerCategoryService(categoryId);

      setMoviesCategory(results);
    } catch (error) {
      const msgError =
        error instanceof Error ? error.message : 'An error occurred';
      toast.error(`Error fetching movies: ${msgError}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (selectCategory) {
      getMoviesPerCategory(selectCategory?.id);
    }
  }, [selectCategory]);

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-2xl font-bold">{selectCategory?.name}</h1>

      {!loading ? (
        <div className="grid grid-cols-1 gap-4 w-full h-full md:grid-cols-4">
          {moviesCategory.map((movie) => (
            <CardMovie key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 w-full md:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <Skeleton key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ContentCategory;
