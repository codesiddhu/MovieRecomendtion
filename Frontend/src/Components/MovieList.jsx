import { useEffect, useState } from "react";
import api from "../api/Api"
import MovieCard from "./MovieCard";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const getMovies = async () => {
    try {
      const response = await api.get("/movies/");
      setMovies(response.data);
    } catch (error) {
      console.log(error);
      alert("Unable to fetch movies");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  if (loading) {
    return (
      <h1 className="text-center text-2xl mt-10">
        Loading Movies...
      </h1>
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-10 px-5">

      <h1 className="text-4xl font-bold text-center mb-10">
        🎬 Movies
      </h1>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
          />
        ))}

      </div>

    </div>
  );
};

export default MovieList;