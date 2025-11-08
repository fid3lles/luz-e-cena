import { useEffect, useState } from "react";
import type { Movie } from "../types/Movie.interface";

const useFilterMovies = (movies: Movie[]) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);

  useEffect(() => {
    setFilteredMovies(movies)
  }, [movies]);

  const handleSearch = () => {
    setSearchTerm(searchTerm.trim());
    const filtered = movies.filter(movie =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMovies(filtered);
  }

  return {searchTerm, setSearchTerm, filteredMovies, handleSearch};
};

export default useFilterMovies;
