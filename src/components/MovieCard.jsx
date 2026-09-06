import React, { useState } from "react";
import { Link } from "react-router-dom";

function MovieCard({ movie, onFavourite, isFavourite }) {
  const [poster, setPoster] = useState(
    movie.Poster !== "N/A" ? movie.Poster : "/image.png"
  );

  const handleFavourite = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onFavourite(movie);
  };

  return (
    <div className="group overflow-hidden rounded-xl border border-gray-800 bg-gray-900 transition hover:-translate-y-1 hover:border-gray-700 hover:shadow-xl">

      <div className="relative aspect-[2/3] overflow-hidden bg-gray-800">

        <Link to={`/movie/${movie.imdbID}`}>
          <img
            src={poster}
            alt={movie.Title}
            onError={() => setPoster("/image.png")}
            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          />
        </Link>

        <button
          type="button"
          onClick={handleFavourite}
          aria-label={
            isFavourite
              ? "Remove from favourites"
              : "Add to favourites"
          }
          className="absolute right-2 top-2 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-xl backdrop-blur transition hover:scale-110"
        >
          {isFavourite ? "❤️" : "🤍"}
        </button>

      </div>

      <Link to={`/movie/${movie.imdbID}`}>
        <div className="p-4">
          <h3 className="truncate text-base font-semibold text-white sm:text-lg">
            {movie.Title}
          </h3>

          <p className="mt-1 text-sm text-gray-400">
            {movie.Year}
          </p>
        </div>
      </Link>

    </div>
  );
}

export default MovieCard;