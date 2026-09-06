import React, { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar";
import MovieGrid from "../../components/MovieGrid";
import { searchMovies } from "../../services/movieApi";

function Home({ favourites, setFavourites }) {
  const [searchQuery, setSearchQuery] = useState(
    () => localStorage.getItem("searchQuery") || ""
  );

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchMovies = async (query) => {
    try {
      setLoading(true);
      setError("");

      const data = await searchMovies(query);

      if (data.Response === "False") {
        setMovies([]);
        setError(data.Error || "No movies found.");
        return;
      }

      setMovies(data.Search || []);
    } catch (error) {
      console.error("Search error:", error);
      setMovies([]);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    localStorage.setItem("searchQuery", query);
    fetchMovies(query);
  };

  useEffect(() => {
    const savedQuery = localStorage.getItem("searchQuery");

    if (savedQuery) {
      fetchMovies(savedQuery);
    }
  }, []);

  const handleFavourite = (movie) => {
    setFavourites((prev) => {
      const alreadyFavourite = prev.some(
        (fav) => fav.imdbID === movie.imdbID
      );

      if (alreadyFavourite) {
        return prev.filter(
          (fav) => fav.imdbID !== movie.imdbID
        );
      }

      return [...prev, movie];
    });
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />

      {searchQuery && !loading && (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-6 text-gray-400">
            Search results for{" "}
            <span className="font-semibold text-white">
              "{searchQuery}"
            </span>
          </p>
        </div>
      )}

      {loading && (
        <div className="flex justify-center py-20">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-700 border-t-red-500" />
        </div>
      )}

      {!loading && error && (
        <div className="mx-auto max-w-2xl px-4 py-16 text-center">
          <div className="text-5xl">😕</div>

          <h2 className="mt-4 text-xl font-semibold">
            No movies found
          </h2>

          <p className="mt-2 text-gray-400">
            {error}
          </p>
        </div>
      )}

      {!loading && !error && movies.length > 0 && (
        <MovieGrid
          movies={movies}
          favourites={favourites}
          onFavourite={handleFavourite}
        />
      )}

      {!loading && !error && !searchQuery && (
        <div className="px-4 py-20 text-center">
          <p className="text-gray-500">
            Search for a movie to get started 🎬
          </p>
        </div>
      )}
    </div>
  );
}

export default Home;