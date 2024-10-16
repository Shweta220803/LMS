// frontend/src/components/UserForm.js
import React, { useState } from 'react';
import axios from 'axios';

const UserForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [membership, setMembership] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);  // Reset any previous error
    setSuccess(null); // Reset any previous success message

    try {
      await axios.get(`${process.env.REACT_APP_API_URL}/api/users/add`, {
        name,
        email,
        membership,
      });
      setSuccess('User added successfully!');
      // Clear the form fields
      setName('');
      setEmail('');
      setMembership('');
    } catch (err) {
      setError('Error adding user. Please try again.');
      console.error('Error adding user:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-3">Add User Membership</h2>
      {error && <p className="text-red-500 mb-3">{error}</p>}
      {success && <p className="text-green-500 mb-3">{success}</p>}
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="border border-gray-300 p-2 mb-3 rounded-md w-full"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="border border-gray-300 p-2 mb-3 rounded-md w-full"
      />
      <input
        type="text"
        placeholder="Membership Type"
        value={membership}
        onChange={(e) => setMembership(e.target.value)}
        required
        className="border border-gray-300 p-2 mb-3 rounded-md w-full"
      />
      <button 
        type="submit" 
        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-200"
      >
        Add User
      </button>
    </form>
  );
};

export default UserForm;
