import axios from 'axios';
import { MovieResponse } from '../types/movie.type';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';

export const fetchMovies = async (
  query: string,
  page: number,
  limit: number,
): Promise<MovieResponse> => {
  const response = await axios.get<MovieResponse>(`${API_BASE_URL}/movies`, {
    params: { q: query, page, limit },
  });
  return response.data;
};
