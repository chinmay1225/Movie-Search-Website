import React, { useEffect, useState } from "react";
import {
  useNavigate,
  useParams,
} from "react-router-dom";

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
        console.error(
          "Movie details error:",
          error
        );

        setError(
          "Something went wrong. Please try again."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="flex min-h-[calc(100vh-64px)] items-center justify-center bg-gray-950">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-700 border-t-red-500" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-[calc(100vh-64px)] flex-col items-center justify-center bg-gray-950 px-4 text-center">

        <p className="text-5xl">😕</p>

        <p className="mt-4 text-lg text-red-400">
          {error}
        </p>

        <button
          onClick={() => navigate(-1)}
          className="mt-6 rounded-lg bg-gray-800 px-5 py-3 text-sm hover:bg-gray-700"
        >
          ⬅️ Go Back
        </button>

      </div>
    );
  }

  return (
    <div className="bg-gray-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-8 rounded-lg border border-gray-700 px-4 py-2 text-sm text-gray-300 transition hover:bg-gray-800"
        >
          ⬅️ Back
        </button>

        <div className="grid gap-8 md:grid-cols-[300px_1fr]">

          {/* Poster */}
          <div className="overflow-hidden rounded-xl bg-gray-900">
            <img
              src={
                movie.Poster !== "N/A"
                  ? movie.Poster
                  : "/image.png"
              }
              alt={movie.Title}
              onError={(e) => {
                e.currentTarget.src =
                  "/image.png";
              }}
              className="w-full object-cover"
            />
          </div>

          {/* Details */}
          <div>

            <h1 className="text-3xl font-bold sm:text-4xl">
              {movie.Title}
            </h1>

            <p className="mt-2 text-gray-400">
              {movie.Year} • {movie.Runtime} •{" "}
              {movie.Rated}
            </p>

            {/* Genres */}
            <div className="mt-5 flex flex-wrap gap-2">
              {movie.Genre
                ?.split(", ")
                .map((genre) => (
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
              <span className="text-yellow-400">
                ★
              </span>

              <span className="ml-2 text-lg font-semibold">
                {movie.imdbRating}
              </span>

              <span className="ml-2 text-gray-500">
                / 10 IMDb
              </span>
            </div>

            {/* Plot */}
            <div className="mt-8">
              <h2 className="text-xl font-semibold">
                Plot
              </h2>

              <p className="mt-2 leading-7 text-gray-400">
                {movie.Plot}
              </p>
            </div>

            {/* Information */}
            <div className="mt-8 space-y-3 text-sm">

              <p>
                <span className="font-semibold text-white">
                  Director:
                </span>{" "}
                <span className="text-gray-400">
                  {movie.Director}
                </span>
              </p>

              <p>
                <span className="font-semibold text-white">
                  Actors:
                </span>{" "}
                <span className="text-gray-400">
                  {movie.Actors}
                </span>
              </p>

              <p>
                <span className="font-semibold text-white">
                  Language:
                </span>{" "}
                <span className="text-gray-400">
                  {movie.Language}
                </span>
              </p>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;