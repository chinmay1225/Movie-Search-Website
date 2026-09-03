import React, { useState } from "react";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  const [poster, setPoster] = useState(
    movie.Poster !== "N/A" ? movie.Poster : "/image.png"
  );

  return (
    <Link
      to={`/movie/${movie.imdbID}`}
      className="group block overflow-hidden rounded-xl border border-gray-800 bg-gray-900 transition hover:-translate-y-1 hover:border-gray-700 hover:shadow-xl"
    >
      <div className="aspect-[2/3] overflow-hidden bg-gray-800">
        <img
          src={poster}
          alt={movie.Title}
          onError={() => setPoster("/image.png")}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-4">
        <h3 className="truncate text-lg font-semibold text-white">
          {movie.Title}
        </h3>

        <p className="mt-1 text-sm text-gray-400">
          {movie.Year}
        </p>
      </div>
    </Link>
  );
}

export default MovieCard;