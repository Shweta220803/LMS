// frontend/src/components/BookList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        // const response = await axios.get('http://localhost:5000/api/books');
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/books`);

        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="mt-5">
      <h2 className="text-2xl font-semibold mb-3">Available Books</h2>
      <SearchBar setBooks={setBooks} />
      <ul className="bg-white rounded-lg shadow-md p-4">
        {books.map((book) => (
          <li key={book._id} className="border-b py-2 flex justify-between items-center">
            <span>{book.title} by {book.author}</span>
            <span className={`text-sm ${book.available ? 'text-green-500' : 'text-red-500'}`}>
              {book.available ? 'Available' : 'Issued'}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;


