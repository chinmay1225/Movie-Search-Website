import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout({ favourites }) {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar favouriteCount={favourites.length} />

      <main className="pt-16">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;