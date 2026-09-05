import { useState, useEffect } from "react";
import React from "react";
import Navbar from "../../components/Navbar";
import SearchBar from "../../components/SearchBar";
import { searchMovies } from "../../services/movieApi";
import MovieCard from "../../components/MovieCard";
import MovieGrid from "../../components/MovieGrid";

function Home() {
  const [searchQuery, setSearchQuery] = useState(() => {
    return localStorage.getItem("searchQuery") || "";
  });
  const [movies, setMovies] = useState(() => {
    const savedMovies = localStorage.getItem("movies");
    return savedMovies ? JSON.parse(savedMovies) : [];
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [favourites, setFavourites] = useState(() => {
    const savedFavourites = localStorage.getItem("favourites");

    return savedFavourites ? JSON.parse(savedFavourites) : [];
  });

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  const handleFavourite = (movie) => {
    setFavourites((prev) => {
      const alreadyFavourite = prev.some((fav) => fav.imdbID === movie.imdbID);

      if (alreadyFavourite) {
        return prev.filter((fav) => fav.imdbID !== movie.imdbID);
      }

      return [...prev, movie];
    });
  };

  const handleSearch = async (query) => {
    setSearchQuery(query);
    setLoading(true);
    setError("");

    localStorage.setItem("searchQuery", query);
    try {
      const data = await searchMovies(query);

      if (data.Response === "False") {
        setError(data.Error);
        setMovies([]);
        return;
      }

      setMovies(data.Search || []);
      localStorage.setItem("movies", JSON.stringify(data.Search || []));
    } catch (error) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setSearchQuery("");
    setMovies([]);
    setError("");
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <MovieGrid
        movies={movies}
        onFavourite={handleFavourite}
        favourites={favourites}
      />

      <main className="pt-16">
        <SearchBar
          onSearch={handleSearch}
          loading={loading}
          onClear={handleClear}
        />

        {loading && (
          <div className="flex min-h-[300px] items-center justify-center">
            <div className="text-center">
              <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-gray-700 border-t-red-500" />

              <p className="mt-4 text-sm text-gray-400">
                Searching for movies...
              </p>
            </div>
          </div>
        )}

        {error && (
          <div className="mx-auto max-w-2xl px-4 py-8">
            <div className="rounded-xl border border-red-900/50 bg-red-950/30 p-6 text-center">
              <div className="text-4xl">😕</div>

              <h3 className="mt-3 text-lg font-semibold text-white">
                Something went wrong
              </h3>

              <p className="mt-2 text-sm text-gray-400">{error}</p>
            </div>
          </div>
        )}

        <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
          {movies.length > 0 ? (
            <>
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-white">
                  Search results for{" "}
                  <span className="text-red-500">"{searchQuery}"</span>
                </h2>

                <p className="mt-1 text-sm text-gray-400">
                  {movies.length} movies found
                </p>
              </div>

              <MovieGrid movies={movies} />
            </>
          ) : (
            !loading &&
            !error && (
              <div className="flex min-h-[300px] items-center justify-center px-4">
                <div className="text-center">
                  <div className="mb-4 text-5xl">🎬</div>

                  <h3 className="text-xl font-semibold text-white">
                    Search for a movie
                  </h3>

                  <p className="mt-2 text-sm text-gray-400">
                    Find your favorite movies and discover something new.
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </main>
    </div>
  );
}

export default Home;
