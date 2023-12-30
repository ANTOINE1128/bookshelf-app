import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../booksSlice';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory

const BookForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = () => {
    const id = Math.random().toString(36).substr(2, 9);
    dispatch(addBook({ id, title, author, category }));
    
    setTitle('');
    setAuthor('');
    setCategory('');

    // Redirect to the home page after adding a book
    navigate('/');
  };
  return (
    <div>
      <h2>Add New Book</h2>
      <div>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label>Author:</label>
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
      </div>
      <div>
        <label>Category:</label>
        <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
      </div>
      <button onClick={handleSubmit}>Add Book</button>
    </div>
  );
};

export default BookForm;
