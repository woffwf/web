import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage';
import ProductList from './components/ProductList/ProductList';
import './App.css';

function App() {
  return (
    <Router>
      <div className="content-container">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductList />} />
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
