import React from "react";
import { NavLink } from "react-router-dom";

function Navbar({ favouriteCount }) {
  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-gray-800 bg-gray-950/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <NavLink
          to="/"
          className="text-xl font-bold text-white sm:text-2xl"
        >
          🎬 CineSearch
        </NavLink>

        {/* Navigation */}
        <div className="flex items-center gap-5 sm:gap-8">

          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `text-sm font-medium transition ${
                isActive
                  ? "text-red-500"
                  : "text-gray-300 hover:text-white"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/favourites"
            className={({ isActive }) =>
              `flex items-center gap-2 text-sm font-medium transition ${
                isActive
                  ? "text-red-500"
                  : "text-gray-300 hover:text-white"
              }`
            }
          >
            ❤️
            <span className="hidden sm:inline">
              Favourites
            </span>

            {favouriteCount > 0 && (
              <span className="rounded-full bg-red-600 px-2 py-0.5 text-xs text-white">
                {favouriteCount}
              </span>
            )}
          </NavLink>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;