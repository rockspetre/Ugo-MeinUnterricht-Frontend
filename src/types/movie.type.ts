export interface Movie {
    title: string;
    director: string;
    plot: string;
    poster: string;
    imdbID: string;
  }
  
  export interface MovieResponse {
    movies: Movie[];
    total: number;
    page: number;
    limit: number;
  }
  