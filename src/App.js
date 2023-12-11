import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage';
import BeverageList from './components/BeverageList/BeverageList';
import BeverageDetailPage from './components/BeverageDetailPage/BeverageDetailPage';
import { BeverageProvider } from './BeverageContext';
import './App.css';

function App() {
  return (
    <BeverageProvider>
      <Router>
      <div className="content-container">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          
            <Route path="/beverages" element={<BeverageList />} />
            <Route path="/beverages/:id" element={<BeverageDetailPage />} /> {/* Детальна сторінка товару */}
          
          
        </Routes>
        <Footer />
      </div>
    </Router>
    </BeverageProvider>
    
  );
}

export default App;
