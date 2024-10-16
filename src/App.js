// frontend/src/App.js
import React from 'react';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import UserForm from './components/UserForm';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <h1 className="text-4xl font-bold text-center mb-5">Library Management System</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <BookForm />
        <UserForm />
      </div>
      <BookList />
      
    </div>
  );
};

export default App;


