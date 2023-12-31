import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import AddBookPage from './pages/AddBookPage';
import BookDetailsPage from './pages/BookDetailsPage';

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes> {/* Replace Switch with Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddBookPage />} />
          <Route path="/book/:id" element={<BookDetailsPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
