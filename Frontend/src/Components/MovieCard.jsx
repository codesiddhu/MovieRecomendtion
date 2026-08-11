import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-5">

      <h2 className="text-xl font-bold text-gray-800">
        {movie.title}
      </h2>

      <p className="text-gray-600 mt-2">
        Year: {movie.year}
      </p>

      <p className="text-yellow-500 font-semibold">
        ⭐ {movie.rating}
      </p>

      <Link
        to={`/movie/${movie.id}`}
        className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        View Details
      </Link>

    </div>
  );
}

export default MovieCard;