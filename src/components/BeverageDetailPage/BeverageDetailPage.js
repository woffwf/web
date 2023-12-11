import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BeverageContext from '../../BeverageContext';
import './BeverageDetailPage.css'; // Стилі для сторінки деталей напою

function BeverageDetailPage() {
  const navigate = useNavigate(); // Додаємо хук useNavigate
  const { id } = useParams();
  const { beverages } = useContext(BeverageContext);
  const beverage = beverages.find(b => b.id === parseInt(id));

  if (!beverage) {
    return <div className="loading">Завантаження даних напою...</div>;
  }

  // Функція для повернення на попередню сторінку
  const goBack = () => {
    navigate(-1); // Перенаправляє користувача на попередню сторінку у історії браузера
  };

  return (
    <div className="beverage-detail-container">
      <h2 className="beverage-title">{beverage.name}</h2>
      <div className="beverage-content">
        <img className="beverage-image" src={'../'+beverage.image} alt={beverage.name} />
        <div className="beverage-info">
          <p className="beverage-brand"><strong>Бренд:</strong> {beverage.brand}</p>
          <p className="beverage-price"><strong>Ціна:</strong> {beverage.price}₴</p>
          <p className="beverage-volume"><strong>Об'єм:</strong> {beverage.volume}</p>
          <p className="beverage-description">{beverage.description}</p>
          <button onClick={goBack} className="back-button">Повернутися до списку</button>
        </div>
      </div>
    </div>
  );
}

export default BeverageDetailPage;