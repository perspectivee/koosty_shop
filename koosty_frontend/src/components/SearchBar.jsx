import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query); // Pass the search query to the parent component
  };

  return (
    <form onSubmit={handleSearch} className="w-full max-w-2xl"> {/* Increased max-width */}
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="px-6 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 w-full" // Larger padding and fully rounded
        />
        <button
          type="submit"
          className="ml-2 p-3 text-gray-600 hover:text-blue-500 transition-colors" // Removed background, increased size
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6" // Increased icon size
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </form>
  );
}