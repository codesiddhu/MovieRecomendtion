
import { useState } from "react";
import api from "../api/Api"
import MovieCard from "./MovieCard";

const Recommendation = () => {

    const [userId, setUserId] = useState("");
    const [movies, setMovies] = useState([]);

    const getRecommendations = async () => {

        if (!userId) {
            alert("Please enter User ID");
            return;
        }

        try {

            const response = await api.get(`/recommendations/${userId}/`);

            setMovies(response.data);

        } catch (error) {
            console.log(error);
            alert("Unable to fetch recommendations");
        }
    };

    return (
        <div className="max-w-7xl mx-auto p-6">

            <h1 className="text-4xl font-bold text-center mb-8">
                Movie Recommendations
            </h1>

            <div className="flex gap-4 mb-8">

                <input
                    type="text"
                    placeholder="Enter User ID"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    className="flex-1 border rounded-lg p-3"
                />

                <button
                    onClick={getRecommendations}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 rounded-lg"
                >
                    Get Recommendations
                </button>

            </div>

            {movies.length === 0 ? (
                <p className="text-center text-gray-500">
                    No recommendations found.
                </p>
            ) : (

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {movies.map((movie) => (

                        <MovieCard
                            key={movie.id}
                            movie={movie}
                        />

                    ))}

                </div>

            )}

        </div>
    );
};

export default Recommendation;