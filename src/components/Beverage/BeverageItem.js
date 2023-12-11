import React from 'react';
import { Link } from 'react-router-dom';

import './BeverageItem.css';


function truncateDescription(description, maxWords) {
  const words = description.split(' ');
  if (words.length <= maxWords) {
    return description;
  }
  const truncatedWords = words.slice(0, maxWords);
  return `${truncatedWords.join(' ')}...`;
}

function BeverageItem({ _id, brand, name, price, volume, description, image }) {
  const truncatedDescription = truncateDescription(description, 10);

  return (
    <div className="beverage-item">
      <Link to={`/beverages/${_id}`}>
        <img src={image} alt={`${brand} ${name}`} />
        <p>Бренд: {brand}</p>
        <p>Назва: {name}</p>
        <p>Ціна: {price}₴</p>
        <p>Об'єм: {volume}</p>
        <p>Опис: {truncatedDescription}</p>
      </Link>
    </div>
  );
}

export default BeverageItem;
