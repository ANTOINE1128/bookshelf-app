// src/components/BookList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../booksSlice';

const BookList = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} by {book.author} (Category: {book.category})
            <button onClick={() => handleRemove(book.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
