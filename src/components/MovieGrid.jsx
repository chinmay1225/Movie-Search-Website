import React from "react";
import MovieCard from "../components/MovieCard";

function MovieGrid({ movies, onFavourite, favourites }) {
  return (
    <section className="mx-auto grid max-w-7xl grid-cols-2 gap-5 px-4 pb-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {movies.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          movie={movie}
          onFavourite={onFavourite}
          isFavourite={favourites?.some(
            (fav) => fav.imdbID === movie.imdbID
          )}
        />
      ))}
    </section>
  );
}

export default MovieGrid;