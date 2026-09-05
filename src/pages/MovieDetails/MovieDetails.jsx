import React, { useEffect, useState } from "react";
import { useNavigate ,useParams } from "react-router-dom";
import { getMovieDetails } from "../../services/movieApi";

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await getMovieDetails(id);

        if (data.Response === "False") {
          setError(data.Error);
          return;
        }

        setMovie(data);
      } catch (error) {
        console.log("Movie details error : ", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovieDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-950 p-10 text-white">Loading...</div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-950 p-10 text-red-500">{error}</div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <button
          className="mb-8 rounded-lg border border-gray-700 px-4 py-2 text-sm text-gray-300 hover:bg-gray-800"
          onClick={() => navigate(-1)}
        >
          ⬅️ Back
        </button>

        <div>
          <h1 className="text-4xl font-bold">{movie.Title}</h1>

          <p className="mt-2 text-gray-400">
            {movie.Year} • {movie.Runtime} • {movie.Rated}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {movie.Genre?.split(", ").map((genre) => (
              <span
                key={genre}
                className="rounded-full bg-gray-800 px-3 py-1 text-sm text-gray-300"
              >
                {genre}
              </span>
            ))}
          </div>

          {/* Rating */}
          <div className="mt-6">
            <span className="text-yellow-400">★</span>
            <span className="ml-2 text-lg font-semibold">
              {movie.imdbRating}
            </span>
            <span className="ml-2 text-gray-500">/ 10 IMDb</span>
          </div>

          {/* Plot */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold">Plot</h2>
            <p className="mt-2 leading-7 text-gray-400">{movie.Plot}</p>
          </div>

          {/* Movie Info */}
          <div className="mt-8 space-y-3 text-sm">
            <p>
              <span className="font-semibold text-white">Director:</span>{" "}
              <span className="text-gray-400">{movie.Director}</span>
            </p>

            <p>
              <span className="font-semibold text-white">Actors:</span>{" "}
              <span className="text-gray-400">{movie.Actors}</span>
            </p>

            <p>
              <span className="font-semibold text-white">Language:</span>{" "}
              <span className="text-gray-400">{movie.Language}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
