// Carousel.js
import React, { useState } from 'react';
import ButtonSelect from '../ButtonSelect/ButtonSelect';
import './Carousel.css'; // Стилі для каруселі

function Carousel({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel-container">
      <div className="carousel-item" key={items[currentIndex].id}>
        <img src={items[currentIndex].image} alt={items[currentIndex].title} />
        <p>{items[currentIndex].description}</p>
      </div>
      <div className="carousel-controls">
        <ButtonSelect onClick={goToPrevious}>Попередній</ButtonSelect>
        <ButtonSelect onClick={goToNext}>Наступний</ButtonSelect>
      </div>
    </div>
  );
}

export default Carousel;
