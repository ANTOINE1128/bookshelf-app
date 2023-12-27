// src/components/BookForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../booksSlice';

const BookForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = () => {
    // Generate a unique ID (you can use a library like uuid)
    const id = Math.random().toString(36).substr(2, 9);

    dispatch(addBook({ id, title, author, category }));
    setTitle('');
    setAuthor('');
    setCategory('');
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
