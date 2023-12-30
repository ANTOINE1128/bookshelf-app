// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import AddBookPage from './pages/AddBookPage';

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes> {/* Replace Switch with Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddBookPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
