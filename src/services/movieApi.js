const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

export const searchMovies = async (query) => {
  const url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`;

  console.log("Request URL:", url);

  const response = await fetch(url);

  const data = await response.json();

  console.log("API Response:", data);

  return data;
};