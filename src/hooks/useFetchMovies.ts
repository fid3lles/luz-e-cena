import { useEffect, useState } from "react";
import { getMovies } from "../api";
import type { Movie } from "../types/Movie.interface";
import { movies as moviesBkp} from "../data/Movies.data";

const useFetchMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchMovies = async () => {
    setIsLoading(true);
    try {
      const movies = await getMovies();
      setMovies(movies);
    } catch (error) {
      setError("Failed to fetch movies.");
      setMovies(moviesBkp);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return {movies, isLoading, error};

};

export default useFetchMovies;