// frontend/src/components/BookForm.js
import React, { useState } from 'react';
import axios from 'axios';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [isbn, setIsbn] = useState('');
  const [bookId, setBookId] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (bookId) {
      await axios.put('http://localhost:5000/api/books/update', {
        id: bookId,
        title,
        author,
        isbn,
      });
    } else {
      await axios.post('http://localhost:5000/api/books', {
        title,
        author,
        isbn,
      });
    }
    setTitle('');
    setAuthor('');
    setIsbn('');
    setBookId(null);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-3">{bookId ? 'Update Book' : 'Add Book'}</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="border border-gray-300 p-2 mb-3 rounded-md w-full"
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
        className="border border-gray-300 p-2 mb-3 rounded-md w-full"
      />
      <input
        type="text"
        placeholder="ISBN"
        value={isbn}
        onChange={(e) => setIsbn(e.target.value)}
        required
        className="border border-gray-300 p-2 mb-3 rounded-md w-full"
      />
      <button 
        type="submit" 
        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-200"
      >
        {bookId ? 'Update' : 'Add'} Book
      </button>
    </form>
  );
};

export default BookForm;
