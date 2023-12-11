// ProductList.js
import React, { useState, useEffect } from 'react';
import Product from '../Product/BeverageItem';
import './ProductList.css';

function ProductList() {
  const [beverages, setBeverages] = useState([
    // Тут вставте ваші дані про напої
    { brand: 'Coca Cola', name: 'Coca Cola', price: 39, volume: '0.5л', description: 'carbonated non-alcoholic cooling drink', image: './img/cola.png' },
    { brand: 'Живчик', name: 'Живчик', price: 30, volume: '0.5л', description: 'a drink that includes natural apple juice and echinacea extract, which are beneficial for children. Also, this delicacy contains vitamins C and E, which strengthen health.', image: './img/zhivchik.png' },
    { brand: 'Спрайт', name: 'Спрайт', price: 32, volume: '0.5л', description: 'carbonated colorless non-alcoholic drink with lemon and lime flavor. Sprite refreshes and energizes. Purified artesian water, natural lemon juice and lime juice are used to make the drink. It is recommended to drink chilled.', image: './img/sprite.png' },
    { brand: 'Доктор Пепер', name: 'Доктор Пепер', price: 49, volume: '0.5л', description: 'carbonated non-alcoholic drink with a distinct and unusual taste - cherry with a hint of almond.', image: './img/drpepper.png' }

    
    // ... інші напої
  ]);

  // Функція для рендеринга напоїв
  const renderBeverages = () => {
    return beverages.map((beverage, index) => (
      <Product key={index} {...beverage} />
    ));
  };

  return (
    <div className="card-container">
      {renderBeverages()}
    </div>
  );
}

export default ProductList;
