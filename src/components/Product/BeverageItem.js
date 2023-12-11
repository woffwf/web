// BeverageItem.js
import React from 'react';
import './BeverageItem.css';

function BeverageItem({ brand, name, price, volume, description, image }) {
  return (
    <div className="beverage-item">
      <img src={image} alt={`${brand} ${name}`} />
      <p>Бренд: {brand}</p>
      <p>Назва: {name}</p>
      <p>Ціна: {price}₴</p>
      <p>Об'єм: {volume}</p>
      <p>Опис: {description}</p>
    </div>
  );
}

export default BeverageItem;