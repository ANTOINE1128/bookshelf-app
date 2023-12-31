import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const BookList = () => {
  const books = useSelector((state) => state.books);

  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <Link to={`/book/${book.id}`}>{book.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
