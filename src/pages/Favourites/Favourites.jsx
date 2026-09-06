import React from "react";
import { Link } from "react-router-dom";
import MovieGrid from "../../components/MovieGrid";

function Favourites({
  favourites,
  setFavourites,
}) {
  const removeFavourite = (movie) => {
    setFavourites((prev) =>
      prev.filter(
        (fav) => fav.imdbID !== movie.imdbID
      )
    );
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

      <div className="mb-8">
        <h1 className="text-3xl font-bold sm:text-4xl">
          ❤️ My Favourites
        </h1>

        <p className="mt-2 text-gray-400">
          {favourites.length}{" "}
          {favourites.length === 1
            ? "movie"
            : "movies"}{" "}
          saved
        </p>
      </div>

      {favourites.length === 0 ? (
        <div className="rounded-2xl border border-gray-800 bg-gray-900 px-4 py-20 text-center">

          <div className="text-6xl">
            💔
          </div>

          <h2 className="mt-5 text-2xl font-semibold">
            No favourites yet
          </h2>

          <p className="mx-auto mt-2 max-w-md text-gray-400">
            Movies you add to your favourites will
            appear here.
          </p>

          <Link
            to="/"
            className="mt-6 inline-block rounded-xl bg-red-600 px-6 py-3 font-semibold transition hover:bg-red-700"
          >
            Discover Movies
          </Link>

        </div>
      ) : (
        <MovieGrid
          movies={favourites}
          favourites={favourites}
          onFavourite={removeFavourite}
        />
      )}

    </div>
  );
}

export default Favourites;