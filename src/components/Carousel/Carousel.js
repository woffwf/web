import React, { useState } from 'react';
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
        {/* Тут може бути будь-який вміст для каруселі, наприклад зображення */}
        <img src={items[currentIndex].image} alt={items[currentIndex].title} />
        <p>{items[currentIndex].description}</p>
      </div>
      <button onClick={goToPrevious}>Попередній</button>
      <button onClick={goToNext}>Наступний</button>
    </div>
  );
}

export default Carousel;