import { useInfiniteQuery } from 'react-query';
import { fetchMovies } from '../services/movies.service';
import { MovieResponse } from '../types/movie.type';

interface UseMoviesProps {
  query: string;
  limit?: number;
}

export const useMovies = ({ query, limit = 10 }: UseMoviesProps) => {
  return useInfiniteQuery<MovieResponse, Error>(
    ['movies', query],
    ({ pageParam = 1 }) => fetchMovies(query, pageParam, limit),
    {
      enabled: query.trim().length > 0,
      getNextPageParam: (lastPage) => {
        const { page, total, limit } = lastPage;
        if (page * limit < total) {
          return page + 1;
        }
        return undefined;
      },
      staleTime: 30000,
      cacheTime: 60000,
    },
  );
};
