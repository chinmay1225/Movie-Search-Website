import React from "react";
import MovieCard from "./MovieCard";

function MovieGrid({
  movies,
  favourites,
  onFavourite,
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {movies.map((movie) => {

          const isFavourite = favourites.some(
            (fav) => fav.imdbID === movie.imdbID
          );

          return (
            <MovieCard
              key={movie.imdbID}
              movie={movie}
              onFavourite={onFavourite}
              isFavourite={isFavourite}
            />
          );
        })}
      </div>

    </section>
  );
}

export default MovieGrid;