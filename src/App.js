
import React from 'react';
import BookList from './components/BookList'; 
import BookForm from './components/BookForm';

const App = () => {
  return (
    <div>
      <h1>Bookshelf App</h1>
      <BookList />
      <BookForm />
    </div>
  );
};

export default App;
