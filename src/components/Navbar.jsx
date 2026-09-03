import React from "react";
import { Film, Heart } from "lucide-react";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 x-50 w-full border-b border-gray-800 bg-gray-950/95">
        <div className=" mx-auto flex h-16 w-max-7xl items-center justify-between px-4 sm-px-6 lg-px-8">
            
            <div className="flex items-center gap-2">
                <Film className="text-red-500 h-7 w-7"/>

                <h1 className="text-xl font-bold text-white sm:text-2xl">
                    Cine<span className="text-red-500">Search</span>
                </h1>
            </div>

            <button
              className="
                flex items-center gap-2
                rounded-lg px-3 py-2
                text-sm font-medium text-gray-300
                transition
                hover:bg-gray-800 hover:text-white
                sm:text-base
              "
            >
                <Heart className="text-red-500 h-5 w-5"/>
                <span >Favourites</span>
            </button>
        </div>
    </nav>
  );
}

export default Navbar;