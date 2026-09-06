const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

export const searchMovies = async (query) => {
  const url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(
    query
  )}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch movies");
  }

  return await response.json();
};

export const getMovieDetails = async (id) => {
  const url = `https://www.omdbapi.com/?apikey=${API_KEY}&i=${encodeURIComponent(
    id
  )}&plot=full`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch movie details");
  }

  return await response.json();
};