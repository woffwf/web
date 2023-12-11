import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import HomePage from './components/HomePage/HomePage';
import BeverageList from './components/BeverageList/BeverageList';
import BeverageDetailPage from './components/BeverageDetailPage/BeverageDetailPage';
import Cart from './components/Cart/Cart';

import './App.css';

function App() {
  return (
    <Router>
      <div className="content-container">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/beverages" element={<BeverageList />} />
          <Route path="/beverages/:id" element={<BeverageDetailPage />} />
          <Route path="/cart" element={<Cart />} /> 
          <Route path="/about" element={<About />} /> 
          <Route path="/contact" element={<Contact />} /> 
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
