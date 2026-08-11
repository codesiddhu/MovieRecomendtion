import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/Api"

const MovieDetail = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    getMovie();
  }, []);

  const getMovie = async () => {
    try {
      const response = await api.get(`/movies/${id}/`);
      setMovie(response.data);
    } catch (error) {
      console.log(error);
      alert("Movie not found");
    }
  };

  const likeMovie = async () => {
    if (!userId) {
      alert("Enter User ID");
      return;
    }

    try {
      await api.post(`/movies/${id}/like/`, {
        user_id: userId,
      });

      alert("Movie liked successfully");
    } catch (error) {
      console.log(error);
      alert("Failed to like movie");
    }
  };

  if (!movie) {
    return (
      <h1 className="text-center text-2xl mt-10">
        Loading...
      </h1>
    );
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white shadow-lg rounded-xl p-8">

      <h1 className="text-4xl font-bold mb-6">
        {movie.title}
      </h1>

      <p className="text-lg">
        📅 <b>Year:</b> {movie.year}
      </p>

      <p className="text-lg mt-2">
        ⭐ <b>Rating:</b> {movie.rating}
      </p>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold">
          Genres
        </h2>

        <div className="flex flex-wrap gap-2 mt-2">
          {movie.genres.map((genre, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full"
            >
              {genre}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold">
          Actors
        </h2>

        <div className="flex flex-wrap gap-2 mt-2">
          {movie.actors.map((actor, index) => (
            <span
              key={index}
              className="bg-green-100 text-green-700 px-3 py-1 rounded-full"
            >
              {actor}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-8">

        <input
          type="text"
          placeholder="Enter User ID"
          className="border p-3 rounded-lg w-full"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />

        <button
          onClick={likeMovie}
          className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg"
        >
          ❤️ Like Movie
        </button>

      </div>

    </div>
  );
};

export default MovieDetail;