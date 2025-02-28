import React, { useState } from 'react';
import { useMovies } from './hooks/useMovies';
import { useDebounce } from './hooks/useDebounce';
import { Movie } from './types/movie.type';

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isError,
    error,
    refetch,
    isLoading,
  } = useMovies({ query: debouncedSearchTerm, limit: 10 });

  const allMovies: Movie[] = data ? data.pages.flatMap((page) => page.movies) : [];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Movie Search</h1>
      <div className="mb-8 flex justify-center">
        <input
          type="text"
          className="border border-gray-300 p-3 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow max-w-md"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          onClick={() => refetch()}
          className="bg-blue-500 text-white px-6 py-3 rounded-r-md hover:bg-blue-600 transition-colors cursor-pointer"
        >
          Search
        </button>
      </div>
      {isLoading && <p className="text-center">Loading...</p>}
      {isError && <p className="text-center text-red-500">Error: {error?.message}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {allMovies.map((movie) => (
          <div
            key={movie.imdbID}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <img
              src={movie.poster}
              alt={movie.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{movie.title}</h2>
              <p className="text-gray-600 mb-1">
                <strong>Director:</strong> {movie.director}
              </p>
              <p className="text-gray-700 text-sm">
                {movie.plot.length > 100
                  ? movie.plot.substring(0, 100) + '...'
                  : movie.plot}
              </p>
            </div>
          </div>
        ))}
      </div>
      {hasNextPage && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
            className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600 transition-colors cursor-pointer"
          >
            {isFetchingNextPage ? 'Loading more...' : 'Load More'}
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
