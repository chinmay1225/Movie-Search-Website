import "./App.css";
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import Favourites from "./pages/Favourites/Favourites";

function App() {
  const [favourites, setFavourites] = useState(() => {
    const savedFavourites = localStorage.getItem("favourites");

    return savedFavourites ? JSON.parse(savedFavourites) : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "favourites",
      JSON.stringify(favourites)
    );
  }, [favourites]);

  return (
    <Routes>
      <Route
        element={<Layout favourites={favourites} />}
      >
        <Route
          path="/"
          element={
            <Home
              favourites={favourites}
              setFavourites={setFavourites}
            />
          }
        />

        <Route
          path="/movie/:id"
          element={<MovieDetails />}
        />

        <Route
          path="/favourites"
          element={
            <Favourites
              favourites={favourites}
              setFavourites={setFavourites}
            />
          }
        />
      </Route>
    </Routes>
  );
}

export default App;