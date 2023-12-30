import React from 'react';

const Book = ({ book, onRemove }) => {
  return (
    <li>
      {book.title} by {book.author} (Category: {book.category})
      <button onClick={() => onRemove(book.id)}>Remove</button>
    </li>
  );
};

export default Book;
