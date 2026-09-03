import { Search } from "lucide-react";
import React, { useState } from "react";

function SearchBar({onSearch , loading , onClear}) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    const query = searchQuery.trim();

    if (!query) {
      return;
    }
    onSearch(query);
  };

  const handleClear = () => {
    setSearchQuery("");
    onClear();
  }
  
  return (
    <section className="px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Find your next <span className="text-red-500">favorite movie</span>
        </h2>

        <p className="mt-4 text-sm text-gray-400 sm:text-base">
          Discover movies, actors and more
        </p>

        <form
          onSubmit={handleSearch}
          className="mt-8 flex flex-col gap-3 sm:flex-row"
        >
          <div className="relative flex-1">
            <Search
              className="
                absolute left-4 top-1/2
                h-5 w-5
                -translate-y-1/2
                text-gray-500
            "
            />

            <input
              type="text"
              placeholder="Search for a movie..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="
                w-full rounded-xl
                border border-gray-700
                bg-gray-900
                py-3 pl-12 pr-4
                text-white 
                outline-none
                placeholder:text-gray-500
                transition
                focus:border-red-500
                focus:ring-1
                focus:ring-red-500
            "
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="
              flex items-center justify-center gap-2
              rounded-xl
              bg-red-600
              px-6 py-3
              font-semibold text-white
              transition
              hover:bg-red-700
              active:scale-95
              disabled:cursor-not-allowed
              disabled:opacity-50
              sm:px-8
            "
          >
            <Search className="h-5 w-5" />
            Search
          </button>

          <button
            type="button"
            onClick={handleClear}
            className="
              rounded-lg
              border border-gray-700
              px-5 py-3
              font-semibold text-gray-300
              transition
              hover:bg-gray-800
            "
          
          >
            Clear
          </button>
        </form>
      </div>
    </section>
  );
}

export default SearchBar;
