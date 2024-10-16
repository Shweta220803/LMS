

// frontend/src/components/SearchBar.js
import React, { useState } from 'react';
import axios from 'axios';

const SearchBar = ({ setBooks }) => {
  const [query, setQuery] = useState('');
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    setError(null); // Reset any previous error

    try {
      // Encode the query to safely include it in the URL
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/books/search`, {
        params: { query } // Send the query as a query parameter
      });
      setBooks(response.data);
    } catch (err) {
      setError('Error fetching search results. Please try again.');
      console.error('Error fetching search results:', err);
    }
  };

  return (
    <div className="mb-4">
      {error && <p className="text-red-500 mb-3">{error}</p>}
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search by title or author"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border border-gray-300 p-2 rounded-l-md w-full"
        />
        <button 
          onClick={handleSearch}
          className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600 transition duration-200"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
